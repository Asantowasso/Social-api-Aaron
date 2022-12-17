// thoughtText is a string, required and must be between 1-280 characters
//createdAt has a date, a value set to the current timestamp and uses a getter method to format the timestamp on query
//username has a string and is required and references the user that created the thought
//reactions are an array of nested documents created with the reaction schema
// For Schema settings there will be a virtual called reaction count that retrieves the length of the thought's reactions array field on query 

const {Schema, model} = require ('mongoose');


const thoughtSchema = new Schema (
    {
        thoughtText:{
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1


        },

        createdAt: {
            type: Date,
            default: Date.now,
        },

        username: {
            type: String,
            required: true,
            
        },

        reactions: [
            {


            }
        ]

        
    
    }

)

const Thought = model('thought', thoughtSchema)

module.exports = Thought;