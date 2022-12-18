// A route to GET all users
// A route to GET all users by _id along with their thought and friend data
// A route to POST a new user 
// A PUT route to update a user by their ID
// A DELETE route to remove a user by their ID
// w/friendId a POST route to add a new friend to a user's friend list
// w/friendId a DELETE route to remove a friend from a user's friend list

const router = require ('express').Router();

const {

getUsers 

}= require('../../controllers/userController');


