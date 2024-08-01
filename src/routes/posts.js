const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Posts = require(".models/posts.js");
const { validatePost } = require("../Posts/Posts-helpers.js");

router.post("/", (req, res) => {
    //put post in database
})

router.get("/category", (req, res) => {
    //get by category
})

router.get("/author", (req, res) => {
    //get by author
})

module.exports = router;