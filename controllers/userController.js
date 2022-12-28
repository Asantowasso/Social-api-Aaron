// A route to GET all users(x)
// A route to GET all users by _id along with their thought and friend data(x)
// A route to POST a new user(x)
// A PUT route to update a user by their ID (x)
// A DELETE route to remove a user by their ID(x)
// w/friendId a POST route to add a new friend to a user's friend list (x)
// w/friendId a DELETE route to remove a friend from a user's friend list

const { ObjectId } = require("mongoose").Types;
const { User, Thought } = require("../models");

module.exports = {
  // GET all users
  getUsers(req, res) {
    User.find()
      .populate("thoughts")

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
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .then(async (User) =>
        !User
          ? res.status(404).json({ message: "cannot find user with that ID" })
          : res.json({
              User,
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  //POST route to create a user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  //PUT route to update a user by their Id
  updateUser(req, res) {
    const attributes = {
      email: req.body.email,
      username: req.body.username,
    };
    User.findOneAndUpdate({ _id: req.params.userId }, attributes, { new: true })
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },

  //delete route to remove a user by Id
  deleteUser(req, res) {
    User.findOneAndRemove({ _id: req.params.userId })

      .then(async (User) =>
        !User
          ? res.status(404).json({ message: "This user does not exist" })
          : res.json({
              User,
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  //A POST route to add a friend
  addFriend(req, res) {
    console.log("Added a friend!");
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $push: { friends: req.params.friendId } },
      {  new: true }
    )
      .then((User) =>
        !User
          ? res.status(404)({ message: "No User found with that Id" })
          : res.json(User)
      )
      .catch((err) => res.status(500).json(err));
  },

  // A Delete route to remove a user from a friends list
  removeFriend(req, res) {
    console.log("Removed a friend!")
    User.findOneAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: { friendId: req.body.friendId } } },
      { new: true }
    )
    .then((user) =>
    !user
      ?res
        .status(404)
        .json({message: 'No user with that ID'})
      : res.json(User)
    )
    .catch((err) => res.status(500).json(err))
  },
};
