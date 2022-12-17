// username is a string is unique, required and trimmed
// email is a string is required, unique and must match a valid email address
// thoughts is an array of _id models referencing the Thought model
// friends an Array of _id values referencing the user model a self-reference
const {Schema, model} = require ('mongoose');

const userSchema = new Schema(
    {
        username:{
            type: String,
            required: true,


        },

        email:{
            type: String,
            required: true,
            unique: true
        },

        thoughts: [

        
        {
        ref: 'Thoughts'
    }
],

    friends:[

     {


    }
]



    }
)

const User = model('user', userSchema)

module.exports = Course;