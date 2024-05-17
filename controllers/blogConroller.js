
const Blog = require('../models/blog');

const blogIndex = (req, res) => {
    Blog.find().sort({createdAt: -1 })
        .then((blogs) => { res.render('blogs/index', {title: "Home", blogs}); })
        .catch((err) => { console.log(err);});
}

const blogCreateGet = (req, res) => {
    // res.send("<p>Hello World</p>")
    // res.sendFile(__dirname + '/views/about.html');
    res.render('blogs/createBlog', { title: "Create"});
}

const blogCreatePost = (req, res) => {
    let blog = new Blog(req.body);

    blog.save()
        .then((result) => { res.redirect('/blogs')})
        .catch((err) => { console.log(err)});
}

const blogDelete = (req, res) => {
    Blog.findByIdAndDelete(req.params.id)
        .then((blog) => { res.json({redirect: "/blogs"})})
        .catch((err) => { console.log(err)});
}

const blogDetail = (req, res) => {
    Blog.findById(req.params.id)
        .then((blog) => { res.render('blogs/details', {blog: blog, title: 'Details'})})
        .catch((err) => { res.render('404', {title: 'Not Found'})});
}

module.exports = {blogIndex, blogCreateGet, blogCreatePost, blogDelete, blogDetail}