import mongoose , {Schema} from "mongoose"



const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    company:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    subject:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    }
})


export const User = mongoose.model("User", userSchema)