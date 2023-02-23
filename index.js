const express = require('express')
const app = express()

app.use(express.json());
// const mongoose = require('mongoose');
const { connection } = require("./Config/db");
const {UserModel} = require('./models/user.model')

const cors = require('cors')
app.use(cors());

require("dotenv").config();
app.get("/", (req, res) => {
	res.send("Welcome to Air Ticket Booking");
  });


  app.post("/api/register",async (req,res)=>{
	
	const { name, email, password } = req.body;
    let user = await UserModel.findOne({ email: email })

    try {
        if (user) {
            return res.status(400).send("user have already exist")
        } else {
            const newUser = new UserModel({name, email, password });
            await newUser.save();
            return res.status(201).send("user create sucessfully")
        }
    }
    catch (e) {
        console.log(e.meassage)
    }

  })


  app.post("/api/login",async (req,res)=>{
	
	
	const { email, password } = req.body;
	const user = await UserModel.findOne({ email });

	if (await (user.password, password)) {

	

		return res.status(201).send("Login successfully")
	}
  
	return res.status(401).send("Invalid");


  })


  app.listen(process.env.PORT, async () => {
	try {
	  await connection;
	  console.log("Database connected Successful");
	  console.log(`App listening on ${process.env.PORT}`);
	} catch (err) {
	  console.log("Database connected Failed");
	  console.log(err);
	}
  });