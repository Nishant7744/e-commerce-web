const port=4000;
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
const multer=require("multer");
const path=require("path");
const cors=require("cors");
const { log } = require("console");
// app.use('../admin/src/assets',express.static('assets'));
app.use(express.static(__dirname + './admin/src/assets'))

app.use(express.json());
app.use(cors());        //using this react connect to port 4000

// databse connection with mongodb

mongoose.connect("mongodb+srv://nishanthvibhute:Nishant7744@cluster0.an9lbsk.mongodb.net/e-commerce");

// API creation

app.get("/",(req,res)=>{

    res.send("express app is running..")

})

// image storage engine

const storage= multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.filename}_${Date.now()}${path.extname(file.originalname)}`)

    }

})

const upload=multer({storage:storage})

//creating upload endpoint for images

app.use('/images',express.static('./upload/images'))
app.post("/upload",upload.single('product'),(req,res)=>{

    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })

})

// schema for creating product

const Product=mongoose.model('product',{
    id:{
        type:Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,

    },
    category:{
        type:String,
        required:true,
    },
    new_price:{
        type:Number,
        required:true,
    },
    old_price:{
        type:Number,
        required:true,
    },
    Date:{
        type:Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default:true,
    }
})

app.post('/addproduct',async(req,res)=>{

    let products = await Product.find({});
    let id;

    if(products.length>0)
    {
        let last_product_array = products.slice(-1);

        let last_product = last_product_array[0];

        id = last_product.id+1;

    }
    else{
        id=1;
    }

    
    const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
        // Date:req.body.Date,
        // available:req.body.available,
    });
    console.log(product);

    await product.save();

    console.log("Saved");

    res.json({
        success:true,
        name:req.body.name,
    })
})

// creating api for deleting product

app.post("/removeproduct",async(req,res)=>{

    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed..");

    res.json({
        success:true,
        name:req.body.name
    })

})

// creating api for getting all product

app.get("/allproducts", async(req,res)=>{

    let products = await Product.find({});
    
    console.log("all product fetched..");

    res.send(products);
})

//  schema for creating user model

const Users = mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }


})

// creating endpoint for registering user

app.post('/signup', async (req,res)=>{

    let check = await Users.findOne({email:req.body.email});

    if(check){
        res.status(400).json({success:false,error:"existing user found with same email"})
    }
    
       
    

    let cart = {};

    for(let i = 0; i < 300; i++){
        cart[i]=0;
    }

    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })

    await user.save();

    const data = {
        user:{
            id:user.id
        }
    }

    const token = jwt.sign(data,'secret_ecom');
    res.json({success:true,token})
})

//creating endpoint for user login

app.post('/login', async(req,res)=>{

    let user=await Users.findOne({email:req.body.email});

    if(user){

        const passCompare=req.body.password===user.password;

        if(passCompare)
        {
            const data = {

                user:{
                    id:user.id
                }
            }

            const token =jwt.sign(data,'secret_ecom');
            res.json({success:true,token})
        }
        else{
            res.json({success:false,error:"wrong password"})
        }
    }
    else{
        res.json({success:false,error:"wrong email id"})
    }
})

//creating end point for new collection

app.get('/newcollection', async(req,res)=>{

    let products= await Product.find({})

    let newcollection = products.slice(1).slice(-8);

    console.log("new collection fetched..");

    res.send(newcollection)
})

//creating end point for popular in women

// app.get('/popularinwomen',async(req,res)=>{

//     let products= await Product.find({category:"women"});

//     let popularin_women = products.slice(0.4);
//     console.log("popular in women fetched..");

//     res.send(popularin_women);

// })

//creating middleware to fetch user 

const fetchUser= async(req,res,next)=>{
    const token=req.header('auth-token');

    if(!token){
        res.status(401).send({error:'please authinticate using valid token '})

    }
    else{
        try{

            const data = jwt.verify(token,'secret_ecom');
            req.user=data.user;
            next();
        }catch(error){
            res.status(401).send({error:"please authinticate using valid token"})
        }
    }
}

//creating end point for adding product in cart data

// app.post('/addtocart',fetchUser,async(req,res)=>{

//     // console.log(req.body,req.user);

//     let userData = await Users.findOne({_id:req.user.id});
//     userData.cartData[req.body.itemId] += 1;
//     await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});

//     res.send("Added")
// })

app.listen(port,(error)=>{

    if(!error){
    console.log(`server running on port ${port}`);
    }

    else{
        console.log("error:"+error);
    }
})