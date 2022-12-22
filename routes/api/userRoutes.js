// A route to GET all users(x)
// A route to GET all users by _id along with their thought and friend data(x)
// A route to POST a new user(x)
// A PUT route to update a user by their ID (x)
// A DELETE route to remove a user by their ID(x)
// w/friendId a POST route to add a new friend to a user's friend list(x)
// w/friendId a DELETE route to remove a friend from a user's friend list

const router = require("express").Router();

const {
  getUsers,
  getSingleUser,
  deleteUser,
  updateUser,
  createUser,
  addFriend
} = require("../../controllers/userController");
router.route("/").get(getUsers).post(createUser);


router.route("/getSingleUser/:userId").get(getSingleUser);
router.route("/deleteUser/:userId").delete(deleteUser);
router.route("/updateUser/:userId").put(updateUser);
router.route("/:userId/friends/:friendId").post(addFriend);

module.exports = router;

