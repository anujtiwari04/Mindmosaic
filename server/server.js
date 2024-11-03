const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/usermodel')

const app = express()
const port = process.env.PORT || 8000;
// app.use(express.json())
// app.use(express.urlencoded({ extended: false }));
// app.use(cors())




app.use(cors(
    {
        origin: "https://mindmosaic-client.vercel.app",
        methods: ["GET","POST"],
        credentials: true,
    }
))








// register------------------------------------------------------------------------------------


app.post('/register',async (req,res) => {
    const { name,email,password } = req.body;
    if (!name || !email || !password) {
        return res.status(400).send('please fill all details');
    }
    else {
        const isAlreadyExists = await UserModel.findOne({ email });
        if (isAlreadyExists) {
            return res.status(400).send("User already exists");
        }
        else {
            try {
                UserModel.create(req.body)
                    .then(user => res.json(user))
            } catch (error) {
                console.log(error)
            }

        }




    }
});












// login------------------------------------------------------------------------------------

app.post('/login',async (req,res) => {
    const { email,password } = req.body;

    // Check if all required fields are provided
    if (!email || !password) {
        return res.status(400).send('Please fill all details');
    }

    try {
        // Check if the user exists
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).send('User does not exist');
        }

        // Check if the password is correct
        if (user.password !== password) {
            return res.status(400).send('Incorrect password');
        }

        res.status(200).json({ message: 'Login successful',user });
    } catch (error) {
        console.log(error);
        res.status(500).send('Server error');
    }
});















app.get('/',(req,res) => {
    res.send("welcome to mindmosaic");
})
app.listen(port,() => {
    console.log("listning on port " + port)
})
require('./dbconnection'); 
