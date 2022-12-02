const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

const Courses = require('./models/course');

app.use( express.static( "public" ) );

const dbURI = 'mongodb+srv://ahad123:MONGO12345@cluster0.souy3gi.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dbURI)
.then((result)=> app.listen(3000))
.catch((err)=>console.log(err))

// app.use(express.static('public'));

app.set('view engine','ejs');

app.set('views','views');

app.get('/',(req,res)=>{
    res.render('home');
})
app.get('/home',(req,res)=>{
    res.redirect('/');
})
app.get('/about',(req,res)=>{
    res.render('aboutus');
})

app.get('/course',(req,res)=>{
    res.render('courses');
})

app.get('/game',(req,res)=>{
    res.render('game');
})

app.get('/',(req,res)=>{
    res.render('index');
})

// trying mongo 

app.get('/add-course',(req,res)=>{
    const course = new Courses(
    {
        title: 'Node js',
        body:'lorem ipsum dolo sit' 
    }
    );

    course.save()
    .then((result)=>{
        // res.send(result);
        res.render('./partials/blog');
    })
    .catch((err)=>{
        console.log(err);
    })
})

app.use((req,res)=>{
    res.render('404');
})





























