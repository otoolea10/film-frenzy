"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const isomorphic_fetch_1 = __importDefault(require("isomorphic-fetch"));
const axios_1 = __importDefault(require("axios"));
//This configures environment variables using dotenv
dotenv_1.default.config();
// Just some middleware to create the Express app and run modules
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
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
const requestOptions = {
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
const requestOptionsCustomers = {
    method: 'POST',
    headers: myHeaders,
    body: rawCustomers,
    redirect: 'follow'
};
// API endpoint to retrieve data from a MongoDB database that shows all the films
app.get('/api', (req, res) => {
    (0, isomorphic_fetch_1.default)("https://data.mongodb-api.com/app/data-afuuc/endpoint/data/v1/action/find", requestOptions)
        .then(res => res.json())
        .then(data => {
        res.json(data);
    })
        .catch(error => {
        console.log('error', error);
        res.status(500).send('Error: ' + error);
    });
});
// API endpoint to retrieve customer data from a MongoDB database
app.get('/users', (req, res) => {
    (0, isomorphic_fetch_1.default)("https://data.mongodb-api.com/app/data-afuuc/endpoint/data/v1/action/find", requestOptionsCustomers)
        .then(res => res.json())
        .then(data => {
        res.json(data);
    })
        .catch(error => {
        console.log('error', error);
        res.status(500).send('Error: ' + error);
    });
});
// Define a GET endpoint at the default URL of the app
app.get('/', (req, res) => {
    // with a dummy html message
    res.send('<h1>Hello World From the Typescript Server!</h1>');
});
// Set the server's port number
// Use the value of an environment variable named 'PORT', or fallback to 8000 if not set  
const port = process.env.PORT || 8000;
// This starts the app and listen on the specified port 
// and logs a message to the console indicating the app is listening on the specified port
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
// Creates an empty array to store fetched customer data
let customerArray = [];
// Asynchronously fetch customer data from the specified URL
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        // Asynchronously fetch customer data from the specified URL, 
        // and it then maps the fetched data to a new format and store it in the `customerArray` array
        const res = yield axios_1.default.get('http://localhost:8000/users');
        customerArray = res.data.documents.map((customer) => {
            return {
                _id: customer._id,
                name: customer.fname + " " + customer.sname,
                email: customer.email,
                password: customer.password
            };
        });
    });
}
// A simple call method to make the function above run
fetchData();
// Define a POST endpoint at the '/login' URL of the app so it can authenticate the login system of the site and works with the front end
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    // Search the `customerArray` which is the same as mongodb for a user with matching email and password
    const user = customerArray.find(user => {
        return user.email === email && user.password === password;
    });
    // If no matching user is found, return a 404 status and a 'User Not Found' message
    if (!user) {
        return res.status(404).send('User Not Found!');
    }
    return res.status(200).json(user);
});
