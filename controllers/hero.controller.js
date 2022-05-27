let heroes = [
  {
    id: 1,
    name: 'Batman',
  },
  { id: 2, name: 'Spiderman' },
]

export async function getHeroesHandler(req, res) {
  res.status(200).json(heroes)
}

export async function addHeroHandler(req, res) {
  if (heroes.find((hero) => hero.id === req.body.id)) {
    res.status(409).json('Hero id must be unique')
  }
  heroes.push(req.body)
  res.status(200).json(heroes)
}

export async function deleteHeroHandler(req, res) {
  const index = heroes.findIndex((hero) => hero.id == req.params.id)
  if (index >= 0) {
    heroes.splice(index, 1)
    res.status(200).json(heroes)
  } else res.status(400).send()
}

export async function editHeroHandler(req, res) {
  const index = heroes.findIndex((hero) => hero.id == req.body.id)
  if (index >= 0) {
    heroes.splice(index, 1, req.body)
    res.status(200).json(heroes)
  } else res.status(400).send()
}
