let mongoose = require('mongoose');
let schema = mongoose.Schema;
let InstituteSchema = new schema({
    institute_name : {
        type : String,
        required : true
    },
    institute_batch : {
        type : String,
        required : true
    },
    institute_course : {
        type : String,
        required : true
    },
    institute_adress : {
        type : String,
        required : true
    },
    student_name: {
        type:mongoose.Schema.Types.ObjectId, ref:'Student', required:true
    },
    isTrue : {
        type : Boolean,
        required:false
    },
});


module.exports = mongoose.model('Institute', InstituteSchema);