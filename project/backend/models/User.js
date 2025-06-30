import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema(
    {
        fullname : {
            type : String,
            required : true
            
        },
        email : {
            type : String,
            required : true,
            unique : true
        },
        password : {
            type : String,
            required : true,
            minlength : 6
        },
        // profilepic : {
        //     type : string,
        //     default : ""
            
        // }
    },{timestamps : true}
)
//password hashing 

userSchema.pre("save ",async function(next){
      if(!this.isModified(password)) return next();

      try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash( this.password,salt);
        next();
      } catch (error) {
        next(error);
      }
})


const User = mongoose.model("User",userSchema);

export default User;