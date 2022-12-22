// A route to GET all thoughts (x)
// A route to GET a thought by its _id
// A route to POST or create a new thought
// A PUT route to update a thought by it's _id
// A route to Delete a thought by it's _id

const { ObjectId } = require("mongoose").Types;
const { User, Thought } = require("../models");

module.exports = {
  // GET all thoughts
  getThoughts(req, res){
    Thought.find()
      .then(async (Thoughts) => {
        const thoughtObj = {
          Thoughts
        };
        return res.json(thoughtObj)
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      })

  },

  // GET thoughts by Id
  getSingleThought(req, res){
    Thought.findOne({_id: req.params.thoughtId})
    .select('__v')
    .then((thought) =>
      !thought
      ? res.status(404).json({message: 'No thought with that Id'})
      :res.json(thought)
    )
    .catch((err) => res.status(500).json(err));
  },

  // Create a thought
  createThought(req, res) {

    Thought.create(
      {_id: req.params.userId},
      {$addToSet: {thoughts: _id}}
    )
    .then ( (user) =>
      !User
      ? res
       .status(404)
       .json( {message : "Did not find a user with that Id"})
      : res.json(user)
    )

  }





}