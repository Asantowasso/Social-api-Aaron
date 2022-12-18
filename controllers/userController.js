// A route to GET all users
// A route to GET all users by _id along with their thought and friend data
// A route to POST a new user 
// A PUT route to update a user by their ID
// A DELETE route to remove a user by their ID
// w/friendId a POST route to add a new friend to a user's friend list
// w/friendId a DELETE route to remove a friend from a user's friend list

const {ObjectId} = require('mongoose').Types
const { createSecureServer } = require('http2');
const {User, Thought} = require('../models')

module.exports = {
    // GET all users
    getUsers(req,res) {
        User.find()
            .then (async (Users) => {
                const userObj = {
                    Users
                };
                return res.json(userObj)
            })
            .catch((err) =>{
                console.log(err);
                return res.status(500).json(err)
            })
    },
        //create (POST) a user

    createUser(req,res)

}