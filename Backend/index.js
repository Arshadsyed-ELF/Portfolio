const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const port = 8080;

// Middleware
app.use(express.json());     
app.use(cors({
    origin: 'https://portfolio-client-iota.vercel.app',
    methods: 'GET',
}));

// MongoDB connection URI from environment variable
const url = 'mongodb+srv://arshad:test123@myportfolio.aoxzyku.mongodb.net/?retryWrites=true&w=majority&appName=myportfolio';
const client = new MongoClient(url);

async function connectDB() {
    try {
        await client.connect();
        console.log("Connected successfully to MongoDB Atlas");
        const db = client.db('portfolio');
        return db;
    } catch (err) {
        console.error("Could not connect to MongoDB", err);
        return null; // Return null if the connection fails
    }       
}

// Route to get user data         
app.get('/userdata', async (req, res) => {
    const db = await connectDB();
    if (db) {
        const collection = db.collection('userdata');
        try {
            const users = await collection.find().toArray();
            console.log("Users fetched:", users); // Log the fetched users
            res.json(users);
        } catch (err) {
            console.error("Error fetching user data", err);
            res.status(500).send("Error fetching user data");
        }
    } else {    
        res.status(500).send("Could not connect to the database.");
    }      
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
