import {Schema, model} from 'mongoose'

const studentSchema = new Schema({
    student_id:{
        type:Number,
        required:true,
        unique:true
    },
    name:String,
    lastname:String,
    grade:Number,
    group:Number,
    career:String,
    average:Number
},{
    versionKey:false,
    timestamps:true
});

export default model('student', studentSchema)



