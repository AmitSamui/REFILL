const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");

//--------db connection ------------
// mongoose.connect("mongodb+srv://amit-samui:f9gYC6vfaWcgzXKA@cluster0.4prjc.mongodb.net/blogDB" , {useNewUrlParser: true});

// const postSchema = {
//   title: String,
//   content: String
// }

// const Post = mongoose.model("Post" , postSchema);

//--------- db connection end----------


const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render("blog");
});



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