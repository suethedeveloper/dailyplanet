var express = require("express"),
app = express(),
bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));

var articles = [
  {id:1, title:"awesome first post", body: "Similique ipsam consequuntur officia accusantium voluptatibus laudantium voluptate magni ipsa ullam cupiditate autem hic assumenda, ab, velit quo delectus recusandae."},
  {id:2, title:"awesome second post", body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo molestias fugit eius voluptatibus repellat distinctio laboriosam debitis "},
  {id:3, title:"awesome third post", body: "Similique ipsam consequuntur officia accusantium voluptatibus laudantium voluptate magni ipsa ullam cupiditate autem hic assumenda, ab, velit quo delectus recusandae."},
  {id:4, title:"awesome fourth post", body:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo molestias fugit eius voluptatibus repellat distinctio laboriosam debitis "}];

app.get("/", function (req, res){
  res.render("site/index", {articles: articles});
});

app.get("/articles", function (req, res){
  res.render("site/index", {articles: articles});
});

app.get("/articles/new", function (req, res){
  res.render("newarticle");
});

app.post("/articles", function (req, res){
  articles.push({id:articles.length+1, title:req.body.title, body:req.body.body});
  res.redirect('/articles');
});


app.get("/articles/:id", function (req, res){
  var id = Number(req.params.id);
  var count = articles.length;
  articles.forEach(function(article){
    
    if (id === article.id) 
      res.render("article",{article: article, count:count});
  });
});

app.get('*', function(req, res){
  res.render("404");
});

app.listen(3000, function(){
  console.log("server starting");
});



