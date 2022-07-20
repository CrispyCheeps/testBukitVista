# LIST API:

## 1. GET - http://localhost:5000/user -> returns list of user
## 2. GET - http://localhost:5000/movies -> returns forbidden status if we access /movie endpoint
## 3. GET - http://localhost:5000/movies/:title -> returns a poster url by input
## 4. GET - http://localhost:5000/movies/favourite/:userId -> returns list of user's favourite movies
## 5. POST - http://localhost:5000/movies/favourite -> insert a favourite user's favourite movie


# Steps: 
## 1. I made a mysql database due to the the task given.
## 2. Then I initiated NPM then installed axios ,body-parser, cors,express,mysql,mysql2,sequelize,tedious
## 3. Made the application structure such as : config, controllers, models, routes, server.js
## 4. Connect to database in config package
## 5. made the models (user, favouriteMovies)
## 6. Built the controllers
## 7. Built some routes needed.