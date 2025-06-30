import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
   bookId: {
            type: mongoose.Schema.Types.ObjectId,
            ref : "book",
            required : true
        },
        user : {
            type : String ,
            required : true
        },
        rating :{
           type : Number,
           default : 0
        },
    comment: {
            type: String,
            required : true
        }},{timestamps : true});

const Review = mongoose.model("Review",reviewSchema);
export default Review;