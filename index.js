import express from 'express'
import router from './routes/index.js'
import swaggerDocs from './swagger.js'

const app = express()
const port = 4000

app.use(express.json())
app.use(router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
  swaggerDocs(app, port)
})
