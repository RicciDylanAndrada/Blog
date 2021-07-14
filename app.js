//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs")
var posts = [];
const app =express();
 const homeStartingContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
const aboutContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
const contactContent ='Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));



app.get("/",function(req,res){
  console.log(posts);
  res.render("home",{homeContent:homeStartingContent,composePost:posts})

});
app.post("/",function(req,res){

});

app.get("/about",function(req,res){
  res.render("about",{aboutContent:aboutContent})
});
app.post("/about",function(req,res){

});
app.get("/contact",function(req,res){
  res.render("contact",{contactContentStuff:contactContent});
});
app.get("/compose",function(req,res){
  res.render("compose")
});
app.post("/compose",function(req,res){

  const Post ={
    title:req.body.postTitle,
    body:req.body.postBody
  };
  posts.push(Post);
  res.redirect("/");





});
app.listen(3000,function(req,res){
  console.log("Listening");

});;
