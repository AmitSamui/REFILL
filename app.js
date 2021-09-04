const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");
require('dotenv').config();
const nodemailer = require("nodemailer");

// http://localhost:3000/blog

//--------db connection ------------
const password  = process.env.mongopassword;
mongoose.connect("mongodb+srv://amit-samui:" + password + "@cluster0.nuddc.mongodb.net/blogdb" , {useNewUrlParser: true});

const postSchema = {
  blogTitle: String,
  blogContent: String,
  blogName: String,
  blogEmail: String
}

const Post = mongoose.model("Post" , postSchema);

//--------- db connection end----------


const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render("main");
});



// ---------------------------------blog section --------------------- 

const blogs = [];

app.get("/blog" , (req , res) => {

  Post.find({} , (err , posts) => {
    if(err){console.log(err)}
    else{
      res.render("blog" , {blogs : posts} );
    }
    
  })
  

})

app.post("/blog" , (req , res) => {
  const body = req.body;

  const post = new Post({
    blogTitle: body.blogTitle,
    blogContent: body.blogContent,
    blogName: body.blogName,
    blogEmail: body.blogEmail
  })

  post.save();

  res.redirect("/blog")
})



app.listen(3000, function () {
  console.log("Server started on port 3000");
});


// app.get("/about", (req, res) => {
//   res.render("about", { aboutContent: aboutContent });
// });

// app.get("/contact", (req, res) => {
//   res.render("contact", { contactContent: contactContent });
// });

// app.get("/compose", (req, res) => {
//   res.render("compose");
// });

// app.get("/post/:postId", (req, res) => {
 
 
// console.log(req.params.postId);

//   Post.findOne({_id : req.params.postId} , (err , posts)=>{
//     if(err) {
//       console.log(err);
//     }else{
//       res.render("post", { post: posts });
//     }
//   })

//   // for (let i = 0; i < posts.length; i++) {
//   //   const post = posts[i];
//   //   if (post.composeText.toLowerCase() === tpc) {
//   //     boo = true;
      
//   //   }
//   // }

//   // if (boo === false) {
//   //   console.log("match not found");
//   // }

// });
// app.post("/compose", (req, res) => {
//   const post = new Post({
//     title: req.body.composeText,
//     content: req.body.postText,
//   });

//   post.save();

//   res.redirect("/");
// });