// error handling would go here as well i.e. .catch(error) => res.error({appropriate code: error})
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Posts = require(".models/posts.js");
const { validatePost } = require("../Posts/Posts-helpers.js");

router.post("/", (req, res) => {
    //put post in database
    //post.add(req.body.post) 
})

router.get("/:SLUG", (req, res) => {
    //get by slug
    //post.find(...)
})

router.get("/category/:CATEGORY", (req, res) => {
    //get by category
    //post.find(...)
})

router.get("/author/:AUTHOR", (req, res) => {
    //get by author
    //post.find(...)
})

module.exports = router;