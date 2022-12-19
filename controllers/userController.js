// A route to GET all users(x)
// A route to GET all users by _id along with their thought and friend data
// A route to POST a new user(x)
// A PUT route to update a user by their ID
// A DELETE route to remove a user by their ID
// w/friendId a POST route to add a new friend to a user's friend list
// w/friendId a DELETE route to remove a friend from a user's friend list

const { ObjectId } = require("mongoose").Types;
const { User, Thought } = require("../models");

module.exports = {
  // GET all users
  getUsers(req, res) {
    User.find()
      .then(async (Users) => {
        const userObj = {
          Users,
        };
        return res.json(userObj);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  //GET a user by Id
  getSingleUser(req,res){
    User.findOne({_id: req.params.userId})
    .select('-__v')
    .then(async(User)=>
        !user
            ?res.status(404).json({message: 'cannot find user with that ID'})
            :res.json({
                User
            })
    )
    .catch((err)=> {
        console.log(err);
        return res.status(500).json(err);
    })

  },

  //POST route to create a user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },


  //delete route to remove a user


};
