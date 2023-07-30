
const mongoose = require('mongoose')
const  validator = require('validator');
const { body } = require('express-validator');



mongoose.connect('mongodb://127.0.0.1:27017/Userdata').then(()=>{
    console.log("successfully conneted")
}).catch((e)=>{
    console.log("failed to connect ",e)
})




const userschema = new mongoose.Schema({
    
    useremail :{

        type: String,
        required: [true, "email is required"],
        unique:[true, "email must be unique"],
        validate(value){

            if(!validator.isEmail(value))
            {
                throw new Error("invalid email address")
            }
           
        }

    },

    userpassword:{

        type: String,
        required: [true, " password is required"],



    }
    
    
})

const user= new mongoose.model('user',userschema)

const express = require('express')

const bodyparser = require('body-parser') // to read the data

const cors = require('cors') // server is allowing to connect with another server.

const app = express();
app.use(cors());

app.use(bodyparser.json()) // also available one method url encoded



// For Signup....
app.post(
    '/home/Signup',  async (req,res)=>{  

    let data = new user({
  
    useremail : req.body.email,
    userpassword : req.body.password
})


res.send("data is receved")
 
let doc = await data.save();
    
console.log(doc)

})


// For Login..///

app.post(
    '/home/login',  async (req,res)=>{  

        const email = req.body.email;
       

        
        try{
            
           
            let userdata = await data.findOne({email:useremail});

            console.log("sdfsdf", userdata )
            console.log("sddsdsfgfgdshgdfsgh")
          
            if(!userdata)
            {
                console.log("sdfsdf", userdata)
                return res.status(400).json({errros: "Enter valied credintials"});
               
            }
            
            if(req.body.password === userdata. userpassword){
                console.log(email)

                res.json({success:true});
                console.log("good")
               
            }          



        } catch(err){

            res.json({success:false});

        }

       
      



})








app.get('/', async (req,res)=>{

    res.send("sadfdsf")
})



app.listen(80,()=>{
    console.log("listinig to prot no 80")
})