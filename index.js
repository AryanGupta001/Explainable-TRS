const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/user'); // Import the User model

const app = express();
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({ extended: true }));


const mongodburl='mongodb+srv://admin:CpRKE7hHUSt6qjPH@cluster0.hwfacsv.mongodb.net/tourify'
mongoose.connect(mongodburl).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

// Middleware to parse JSON bodies
app.use(express.json());
// Serve HTML files from a directory named 'public'
app.use(express.static('public'));

app.post('/login', async (req, res) => {
    // Implement admin signup logic
    const {email,password} = req.body;
 
    if (!req.body.email || !req.body.password) {
        return res.status(400).json({ message: "Missing email or password" });
      }
    try {       
        const user = await User.find({
            email
        });
        console.log(user);
    
        if (user) {
          return res.json({ message: "ok" });
        }
        else {
            res.json("not a user");
        }

      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Route to handle user registration
app.post('/register', async (req, res) => {
    try {
        // Create a new user document based on the request body
        const newUser = new User(req.body);
        // Save the user to the database
        await newUser.save();
        res.status(201).send('User registered successfully');
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/login.html`);
});
