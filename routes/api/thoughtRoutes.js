// A route to GET all thoughts (x)
// A route to GET a thought by its _id
// A route to POST or create a new thought
// A PUT route to update a thought by it's _id
// A route to Delete a thought by it's _id

const router = require("express").Router();

const { getThoughts, getSingleThought, createThought  } = require("../../controllers/thoughtController");

router.route("/").get(getThoughts).post(createThought)
router.route("/getSingleThought/:userId").get(getSingleThought)
// router.route("/createThought/:userId").post(createThought)

module.exports = router;

//http://localhost:3001/api/users/639f7cca6334b9725d61cdcb/friends/639fe8792764a847eff7f5f5