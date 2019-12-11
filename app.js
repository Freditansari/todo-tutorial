const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
let path= require('path');

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    return res.render('index');
});

var liveReload=require('livereload').createServer({
    exts:['js', 'ejs', 'css']
});

liveReload.watch(path.join(__dirname,'views'));

app.listen(port, () => {
    console.log(`todo app runs on port: ${port}`);
});

//Run app, then load http://localhost:port in a browser to see the output.

/*
how to enable live reload
npm --save-dev livereload
npm install path

add this code : 
var liveReload = require('livereload').createServer({
    exts:['js', 'ejs', 'css']
})
liveReload.watch(path.join(__dirname,'views'));

install live reload browser extensions

change package.json start script


*/