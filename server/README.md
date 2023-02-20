# Getting Started with FilmFrenzy Server

This project was Node.js and Typescript

## How to Start the Node.js Server

In the project directory, you can run:
### `npm install`
Installs npm dependencies for the server, run this before starting


### `npm run dev`

After Installing the dependencies you can now run the server, using the command above,

Open [http://localhost:8000](http://localhost:8000) to view it in the browser. 

You should be welcomed with a "Welcome to Film Frenzy from the Typescript Server!" message to know if it ran successfully.

## Here is a list of all the usable API EndPoints that are used with our FrontEnd

### All of these will start with localhost:8000 i.e `localhost:8000/api`

### `/api`
This API endpoint is used to retrieve data from our MongoDB databse and shows all the Films stored

### `/users`
This API endpoint is used to retrieve data from our MongoDB databse and shows all the Users stored

### `/login`
This  POST endpoint used so it can authenticate the login system of the site and works with the front-end

### `/api/:id`
This is an API endpoint for single films so each film's id has an own api link based on film _id

### `/subscription`
This API endpoint is used to retrieve the subscription plan information from the Mongo database

### `/subscription/:id`
This API endpoint is used to retrieve the subscription plan information based on id from the Mongo database

### `/users/delete/:fname`
This is an API endpoint to delete a user from the database

### `/genre/action`
This API endpoint is used to retrieve the films only from the action genre of the films stored

### `/genre/animation`
This API endpoint is used to retrieve the films only from the animation genre of the films stored



