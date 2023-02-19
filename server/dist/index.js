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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
// HTTP request options for fetching data from a MongoDB database for the collection : customers to display all.
const rawCustomers = JSON.stringify({
    dataSource: "Cluster0",
    database: "Films",
    collection: "customers",
    filter: {},
});
const requestOptionsCustomers = {
    method: "POST",
    headers: myHeaders,
    body: rawCustomers,
    redirect: "follow",
};
// API endpoint to retrieve data from a MongoDB database that shows all the films
app.get("/api", (req, res) => {
    //Get limit parameter from query string
    const limit = Number(req.query.limit);
    // HTTP request options for fetching data from a MongoDB database for the collection films to display all.
    const raw = JSON.stringify({
        dataSource: "Cluster0",
        database: "Films",
        collection: "films",
        limit,
    });
    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };
    (0, isomorphic_fetch_1.default)("https://data.mongodb-api.com/app/data-afuuc/endpoint/data/v1/action/find", requestOptions)
        .then((res) => res.json())
        .then((data) => {
        res.json(data);
    })
        .catch((error) => {
        console.log("error", error);
        res.status(500).send("Error: " + error);
    });
});
// API endpoint to retrieve customer data from a MongoDB database
app.get("/users", (req, res) => {
    (0, isomorphic_fetch_1.default)("https://data.mongodb-api.com/app/data-afuuc/endpoint/data/v1/action/find", requestOptionsCustomers)
        .then((res) => res.json())
        .then((data) => {
        res.json(data);
    })
        .catch((error) => {
        console.log("error", error);
        res.status(500).send("Error: " + error);
    });
});
// Define a GET endpoint at the default URL of the app
app.get("/", (req, res) => {
    // with a dummy html message
    res.send("<h1>Hello World From the Typescript Server!</h1>");
});
// Set the server's port number
// Use the value of an environment variable named 'PORT', or fallback to 8000 if not set
const port = process.env.PORT || 8000;
// This starts the app and listen on the specified port
// and logs a message to the console indicating the app is listening on the specified port
app.listen(port, () => {
    console.log(`FilmFrenzy server listening on port ${port}`);
});
// Creates an empty array to store fetched customer data
let customerArray = [];
// Asynchronously fetch customer data from the specified URL
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        // Asynchronously fetch customer data from the specified URL,
        // and it then maps the fetched data to a new format and store it in the `customerArray` array
        const res = yield axios_1.default.get("http://localhost:8000/users");
        customerArray = res.data.documents.map((customer) => {
            return Object.assign(Object.assign({}, customer), { name: customer.fname + " " + customer.sname });
        });
    });
}
// A simple call method to make the function above run
fetchData();
// Define a POST endpoint at the '/login' URL of the app so it can authenticate the login system of the site and works with the front end
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    // Search the `customerArray` which is the same as mongodb for a user with matching email and password
    const user = customerArray.find((user) => {
        return user.email === email && user.password === password;
    });
    // If no matching user is found, return a 404 status and a 'User Not Found' message
    if (!user) {
        return res.status(404).send("User Not Found!");
    }
    const { password: temp } = user, userAuth = __rest(user, ["password"]);
    return res.status(200).json(userAuth);
});
/// This is an API endpoint for single films so each film's id has an own api link
app.get("/api/:id", (req, res) => {
    const filmId = req.params.id;
    const rawSingleFilm = JSON.stringify({
        dataSource: "Cluster0",
        database: "Films",
        collection: "films",
        filter: {
            _id: {
                $oid: filmId,
            },
        },
    });
    const requestOptionsSingleFilm = {
        method: "POST",
        headers: myHeaders,
        body: rawSingleFilm,
        redirect: "follow",
    };
    (0, isomorphic_fetch_1.default)("https://data.mongodb-api.com/app/data-afuuc/endpoint/data/v1/action/find", requestOptionsSingleFilm)
        .then((res) => res.json())
        .then((data) => {
        res.json(data);
    })
        .catch((error) => {
        console.log("error", error);
        res.status(500).send("Error: " + error);
    });
});
/// This is an API endpoint for the subscription plan information
app.get("/subscription", (req, res) => {
    const rawSubscriptionType = JSON.stringify({
        dataSource: "Cluster0",
        database: "Films",
        collection: "subscriptionType",
        filter: {},
    });
    const requestOptionsSubscriptionType = {
        method: "POST",
        headers: myHeaders,
        body: rawSubscriptionType,
        redirect: "follow",
    };
    (0, isomorphic_fetch_1.default)("https://data.mongodb-api.com/app/data-afuuc/endpoint/data/v1/action/find", requestOptionsSubscriptionType)
        .then((res) => res.json())
        .then((data) => {
        res.json(data);
    })
        .catch((error) => {
        console.log("error", error);
        res.status(500).send("Error: " + error);
    });
});
/// This is an API endpoint for the subscription plan information
app.get("/subscription/:id", (req, res) => {
    const subscriptionId = req.params.id;
    const rawSubscriptionType = JSON.stringify({
        dataSource: "Cluster0",
        database: "Films",
        collection: "subscriptionType",
        filter: {
            _id: {
                $oid: subscriptionId,
            },
        },
    });
    const requestOptionsSubscriptionType = {
        method: "POST",
        headers: myHeaders,
        body: rawSubscriptionType,
        redirect: "follow",
    };
    (0, isomorphic_fetch_1.default)("https://data.mongodb-api.com/app/data-afuuc/endpoint/data/v1/action/find", requestOptionsSubscriptionType)
        .then((res) => res.json())
        .then((data) => {
        res.json(data);
    })
        .catch((error) => {
        console.log("error", error);
        res.status(500).send("Error: " + error);
    });
});
/// This is an API endpoint to delete a user
app.get("/users/delete/:fname", (req, res) => {
    const deletefname = req.params.fname;
    const rawDelete = JSON.stringify({
        dataSource: "Cluster0",
        database: "Films",
        collection: "customers",
        filter: {
            fname: deletefname,
        },
    });
    const requestOptionsDelete = {
        method: "POST",
        headers: myHeaders,
        body: rawDelete,
        redirect: "follow",
    };
    (0, isomorphic_fetch_1.default)("https://data.mongodb-api.com/app/data-afuuc/endpoint/data/v1/action/deleteOne", requestOptionsDelete)
        .then((res) => res.json())
        .then((data) => {
        res.json(data);
    })
        .catch((error) => {
        console.log("error", error);
        res.status(500).send("Error: " + error);
    });
});
//Below is the API for categorisations
const rawAction = JSON.stringify({
    dataSource: "Cluster0",
    database: "Films",
    collection: "films",
    filter: {
        genre: "Action",
    },
});
const requestOptionsAction = {
    method: "POST",
    headers: myHeaders,
    body: rawAction,
    redirect: "follow",
};
app.get("/genre/action", (req, res) => {
    (0, isomorphic_fetch_1.default)("https://data.mongodb-api.com/app/data-afuuc/endpoint/data/v1/action/find", requestOptionsAction)
        .then((res) => res.json())
        .then((data) => {
        res.json(data);
    })
        .catch((error) => {
        console.log("error", error);
        res.status(500).send("Error: " + error);
    });
});
app.get("/genre/animation", (req, res) => {
    const rawSingleFilm = JSON.stringify({
        dataSource: "Cluster0",
        database: "Films",
        collection: "films",
        filter: {
            genre: "Animation",
        },
    });
    const requestOptionsAnimation = {
        method: "POST",
        headers: myHeaders,
        body: rawSingleFilm,
        redirect: "follow",
    };
    (0, isomorphic_fetch_1.default)("https://data.mongodb-api.com/app/data-afuuc/endpoint/data/v1/action/find", requestOptionsAnimation)
        .then((res) => res.json())
        .then((data) => {
        res.json(data);
    })
        .catch((error) => {
        console.log("error", error);
        res.status(500).send("Error: " + error);
    });
});
