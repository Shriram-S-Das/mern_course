import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
   title : { type : String ,
    require : true
},
author: {
    type : String,
    requrie : true
},
description : {
    type : String ,
    require : true
},
genre : {
    type : String,
    required : true
},
averageRating :{
    type : Number,
    default : 0
},
coverImage : {
    type : String,
    default : "",
    required : true
}})

const Book = mongoose.model("Book",bookSchema);
export default Book;