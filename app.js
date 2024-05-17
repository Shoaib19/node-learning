const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const BlogRoutes = require('./routes/blogRoutes');
require('dotenv').config();


const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

const dbUrl = `mongodb+srv://shoaib:${process.env.DB_PASSWORD}@nodelearning.bm1q2vb.mongodb.net/myDb`
mongoose.connect(dbUrl)
	.then((result) => { 
		console.log('DB connection established');
		app.listen(3000);
	})
	.catch(err => { console.log(err) })
// app.use((req, res, next) => {
// 	console.log('new req has been made:')
// 	console.log("host: ", req.hostname)
// 	console.log("Path: ",req.path)
// 	console.log("Method: ",req.method)
// 	next();
// })

app.use(express.static('public'));
app.use(morgan('tiny'));

app.get('/', (req, res) => {
  // res.send("<p>Hello World</p>")
  // res.sendFile('./views/index.html', {root: __dirname});
  // res.render('index', { title: "Home", blogs });

	res.redirect('/blogs');
})

app.use('/blogs',BlogRoutes);

app.get('/about', (req, res) => {
  // res.send("<p>Hello World</p>")
  // res.sendFile(__dirname + '/views/about.html');
  res.render('about', { title: "About"});
})

app.get('/about-us', (req, res) => {
  // res.send("<p>Hello World</p>")
  res.redirect('/about');
})

app.use((req, res) => {
  // res.status(404).sendFile(__dirname + '/views/notFound.html');
  res.status(404).render('404', { title: "404"});
})




// **** mongob sandbox ****

// app.get('/add/blog', (req, res) => {
// 	const blog = new Blog({
// 		title: "Hello World",
// 		snippet: "more hello world",
// 		body: "Again Hello World"
// 	});

// 	blog.save()
// 		.then((result) => { res.send(result); })
// 		.catch(err => { console.log(err)})
// })

// app.get('/all/blogs', (req, res) => {
// 	Blog.find()
// 		.then(result => { res.send(result); })
// 		.catch(err => { console.log(err)});
// })

// app.get('/single/blog', (req, res) => {
// 	Blog.findById('664601078b103833ff98abde')
// 		.then(result => { res.send(result); })
// 		.catch(err => { console.log(err)});
// })