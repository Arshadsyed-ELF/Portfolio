// const express = require('express');
// const { MongoClient } = require('mongodb');
// const cors = require('cors');

// const app = express();
// const port = 3001;

// // Middleware
// app.use(express.json());     
// app.use(cors({
//     origin: ['https://portfolio-client-iota.vercel.app'],
//     methods: ['GET'],
//      credentials: true
// }));

// // MongoDB connection URI from environment variable
// const url = 'mongodb+srv://arshad:test123@myportfolio.aoxzyku.mongodb.net/?retryWrites=true&w=majority&appName=myportfolio';
// const client = new MongoClient(url);

// async function connectDB() {
//     try {
//         await client.connect();
//         console.log("Connected successfully to MongoDB Atlas");
//         const db = client.db('portfolio');
//         return db;
//     } catch (err) {
//         console.error("Could not connect to MongoDB", err);
//         return null; // Return null if the connection fails
//     }       
// }

// // Route to get user data         
// app.get('/userdata', async (req, res) => {
//     const db = await connectDB();
//     if (db) {
//         const collection = db.collection('userdata');
//         try {
//             const users = await collection.find().toArray();
//             console.log("Users fetched:", users); // Log the fetched users
//             res.json(users);
//         } catch (err) {
//             console.error("Error fetching user data", err);
//             res.status(500).send("Error fetching user data");
//         }
//     } else {    
//         res.status(500).send("Could not connect to the database.");
//     }      
// });

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });


const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
// const RegisterModel = require('./models/Register')

const app = express()
app.use(cors(
    {
        origin: ["https://deploy-mern-frontend.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true
    }
));
app.use(express.json())

mongoose.connect('mongodb+srv://yousaf:test123@cluster0.g4i5dey.mongodb.net/test?retryWrites=true&w=majority');


const mongoose = require('mongoose')

const RegisterSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const RegisterModel = mongoose.model("register", RegisterSchema);

app.get("/", (req, res) => {
    res.json("Hello");
})
app.post('/register', (req, res) => {
    const {name, email, password} = req.body;
    RegisterModel.findOne({email: email})
    .then(user => {
        if(user) {
            res.json("Already have an account")
        } else {
            RegisterModel.create({name: name, email: email, password: password})
            .then(result => res.json(result))
            .catch(err => res.json(err))
        }
    }).catch(err => res.json(err))
})


app.listen(3001, () => {
    console.log("Server is Running")
})
