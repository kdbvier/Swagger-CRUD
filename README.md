# NodeJS CRUD API with swagger docs
This example is a good example for people who wants to start documenting Node.js API with Swagger. 

Example covers requests documentation and documenting responses with schemas and example data
- GET 
- POST
- PUT
- DELETE


![demo](https://i.imgur.com/XLEWgx8.png)

![demo_detail](https://i.imgur.com/U60NFwS.png)
## How to use

Execute `node index.js` to run the example as an app

OR

Run in docker container

`docker-compose -f docker-compose.yml pull && docker-compose -f docker-compose.yml up -d --build`

--- 
Swagger Page - Navigate to `http://localhost:4000/docs`


Documentation in JSON format avaliable `http://localhost:4000/docs.json`
## Example
![JSON Format](https://i.imgur.com/VntXjdY.png)



How to import to Postman
Downloaded JSON documentation can be imported to postman
![Postman Import](https://i.imgur.com/FvXJJNg.png)
