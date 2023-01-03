// A route to GET all thoughts (x)
// A route to GET a thought by its _id(x)
// A route to POST or create a new thought (x)
// A PUT route to update a thought by it's _id (x)
// A route to Delete a thought by it's _id 

const { ObjectId } = require("mongoose").Types;
const { User, Thought } = require("../models");

module.exports = {
  // GET all thoughts
  getThoughts(req, res) {
    Thought.find()
      .then(async (Thoughts) => {
        const thoughtObj = {
          Thoughts,
        };
        return res.json(thoughtObj);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // GET thoughts by Id
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select("-__v")
      .then((Thought) =>
        !Thought
          ? res.status(404).json({ message: "No thought with that Id" })
          : res.json(Thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Create a thought
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        console.log(thought._id);
        return User.findOneAndUpdate(
          { _id: req.params.userId },
          { $addToSet: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then((user) => {
        console.log(user);
        res.json({ message: "added a thought to a user" });
      })

      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });

  },

  // a DELETE route to remove a thought
  deleteThought(req, res) {
    Thought.findOneAndDelete({_id: req.params.thoughtId})
    .select("-__v")
    .then((Thought)=>
    !Thought
    ? res.status(404).json({message: "No thought with that Id"})
    : res.json(Thought)
    
    )
    .catch((err) => res.status(500).json(err))
    
  },

  // PUT route to update a thought
  updateThought(req,res){
    const attributes = {
      thoughtText: req.body.thoughtText
    };
    Thought.findOneAndUpdate({_id: req.params.thoughtId}, attributes, {new: true})
    .then((thought) => res.json(thought))

  },

// POST create a reaction
  addReaction(req,res){
    console.log('You are giving a reaction')
    console.log(req.body)
    Thought.findOneAndUpdate(
    {_id: req.params.thoughtId},
    {$addToSet: {reactions: req.body}},
    {new:true}
    )
    .then((thought) =>
    !thought
      ?res
        .status(404)
        .json({message: "No thought with that ID"})
      : res.json(thought)
    )
    .catch((err) => res.status(500).json(err));
  },

  //DELETE to remove a reaction
  removeReaction(req,res){
    console.log("Removed a reaction!")
    Thought.findOneAndUpdate(
      {_id: req.params.thoughtId},
      {$pull: {reactions:{_id: req.params.reactionId }}},
      {new:true}
    ).then ((thought) =>
    !thought
    ?res
      .status(404)
      .json({message: "No reaction with that ID"})
    : res.json(thought)
  )
  .catch((err) => res.status(500).json(err));
    
  }

};
