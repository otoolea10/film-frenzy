import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import path from "path";
import cors from "cors";
import fetch from 'isomorphic-fetch';
import axios from 'axios';

//This configures environment variables using dotenv
dotenv.config();

// Just some middleware to create the Express app and run modules
const app: Express = express();
app.use(express.json());
app.use(cors());

// Headers for HTTP requests for the mongodb 
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Access-Control-Request-Headers", "*");
myHeaders.append("api-key", "2pLVyVoLai1QVk1AZwfAC1UvcueRt3mX9ha7J3SbQxIvbwmWij3WJgGqMlkd3Ix2");
myHeaders.append("Accept", "application/json");
// HTTP request options for fetching data from a MongoDB database for the collection films to display all.
const raw = JSON.stringify({
  "dataSource": "Cluster0",
  "database": "Films",
  "collection": "films",
  "filter": {}
});

const requestOptions: RequestInit = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

// HTTP request options for fetching data from a MongoDB database for the collection : customers to display all.
const rawCustomers = JSON.stringify({
  "dataSource": "Cluster0",
  "database": "Films",
  "collection": "customers",
  "filter": {}
});

const requestOptionsCustomers: RequestInit = {
  method: 'POST',
  headers: myHeaders,
  body: rawCustomers,
  redirect: 'follow'
};

// API endpoint to retrieve data from a MongoDB database that shows all the films
app.get('/api', (req, res) => {
    fetch("https://data.mongodb-api.com/app/data-afuuc/endpoint/data/v1/action/find", requestOptions)
        .then(res => res.json())
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            console.log('error', error);
            res.status(500).send('Error: ' + error);
        });
});
// API endpoint to retrieve customer data from a MongoDB database
app.get('/users', (req, res) => {
  fetch("https://data.mongodb-api.com/app/data-afuuc/endpoint/data/v1/action/find", requestOptionsCustomers)
      .then(res => res.json())
      .then(data => {
          res.json(data)
      })
      .catch(error => {
          console.log('error', error);
          res.status(500).send('Error: ' + error);
      });
});

// Define a GET endpoint at the default URL of the app
app.get('/', (req: Request, res: Response) => {
  // with a dummy html message
  res.send('<h1>Hello World From the Typescript Server!</h1>')
  });

// Set the server's port number
// Use the value of an environment variable named 'PORT', or fallback to 8000 if not set  
const port = process.env.PORT || 8000;
// This starts the app and listen on the specified port 
// and logs a message to the console indicating the app is listening on the specified port
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
});
// Creates an empty array to store fetched customer data
let customerArray: any[] = [];
// Asynchronously fetch customer data from the specified URL
async function fetchData() {
  // Asynchronously fetch customer data from the specified URL, 
  // and it then maps the fetched data to a new format and store it in the `customerArray` array
  const res = await axios.get('http://localhost:8000/users');
  customerArray = res.data.documents.map((customer: {_id: string, fname: string, sname: string, email: string,password: string}) => {
    return {
      _id: customer._id,
      name: customer.fname + " " + customer.sname,
      email: customer.email,
      password: customer.password
    }
  });
}
// A simple call method to make the function above run
fetchData();
interface FormInputs {
    email: string,
    password: string
  }

// Define a POST endpoint at the '/login' URL of the app so it can authenticate the login system of the site and works with the front end
app.post('/login', (req: Request, res: Response) => {
  const { email, password }:FormInputs = req.body;
  // Search the `customerArray` which is the same as mongodb for a user with matching email and password
  const user = customerArray.find(user => {
    return user.email === email && user.password === password
  });
  // If no matching user is found, return a 404 status and a 'User Not Found' message
  if (!user) {
    return res.status(404).send('User Not Found!')
  }

  return res.status(200).json(user)
});


/// This is an API endpoint for single films so each film's id has an own api link
app.get('/api/:id', (req, res) => {
  const filmId = req.params.id;
  const rawSingleFilm = JSON.stringify({
    "dataSource": "Cluster0",
    "database": "Films",
    "collection": "films",
    "filter": {
      "_id": {
        "$oid": filmId
      }
    }
  });

  const requestOptionsSingleFilm: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    body: rawSingleFilm,
    redirect: 'follow'
  };

  fetch("https://data.mongodb-api.com/app/data-afuuc/endpoint/data/v1/action/find", requestOptionsSingleFilm)
      .then(res => res.json())
      .then(data => {
          res.json(data)
      })
      .catch(error => {
          console.log('error', error);
          res.status(500).send('Error: ' + error);
      });
});

//Below is the API for categorisations

// app.get('/api/action', (req , res) => {
//   const filmId = req.params.id;
//   const rawAction = JSON.stringify({
//     "dataSource": "Cluster0",
//     "database": "Films",
//     "collection": "films",
//     "filter": {
//       "_id": {
//         "$oid": filmId
//       },
//       "genre": "Action"
//     }
//   });

//   const requestOptionsAction: RequestInit = {
//     method: 'POST',
//     headers: myHeaders,
//     body: rawAction,
//     redirect: 'follow'
//   };

//   fetch("https://data.mongodb-api.com/app/data-afuuc/endpoint/data/v1/action/find", requestOptionsAction)
//       .then(res => res.json())
//       .then(data => {
//           res.json(data)
//       })
//       .catch(error => {
//           console.log('error', error);
//           res.status(500).send('Error: ' + error);
//       });
// });


// app.get('/api/animation', (req, res) => {
//   const rawSingleFilm = JSON.stringify({
//     "dataSource": "Cluster0",
//     "database": "Films",
//     "collection": "films",
//     "filter": {
//       "genre": "Animation"
//     }
//   });

//   const requestOptionsAnimation: RequestInit = {
//     method: 'POST',
//     headers: myHeaders,
//     body: rawSingleFilm,
//     redirect: 'follow'
//   };

//   fetch("https://data.mongodb-api.com/app/data-afuuc/endpoint/data/v1/action/find", requestOptionsAnimation)
//       .then(res => res.json())
//       .then(data => {
//           res.json(data)
//       })
//       .catch(error => {
//           console.log('error', error);
//           res.status(500).send('Error: ' + error);
//       });
// });