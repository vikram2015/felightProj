let studentSchema = require('./studentSchema');
let promise = require('promise');

//DB Operation for Save operation
let saveTheStudent = (parameter) => {
    return new promise(function (resolve, reject) {

        let saveStudent = new studentSchema(parameter);
        saveStudent.save().then(function (savedData) {
            console.log('this is operation file after save' + savedData);
            resolve(savedData);
        })
    })

}

//DB Operation for Get operation
let getTheStudent = (parameter) => {
    return new promise(function (resolve, reject) {
        studentSchema.find().then(function (savedData) {
            console.log('this is operation file after save' + savedData);
            resolve(savedData);
        })
    })

}


//DB Operation for Get operation
let getTheSelectedStudent = (parameter) => {
    console.log('====== parameter in the studentOperation file '+parameter)
    return new promise(function (resolve, reject) {
        studentSchema.findOne({student_institute:parameter}).then(function (savedData) {
            console.log('this is operation file after save' + savedData);
            resolve(savedData);
        })
    })

}


//DB Operation for Update operation
let updateTheStudent = (parameter) => {
    return new promise(function (resolve, reject) {
        studentSchema.findByIdAndUpdate(parameter.id, {$set:parameter.formData}).then(function(updatedData){
            resolve(updatedData);
        })
    })

}

//DB Operation for Get operation
let fetchAggregatedDetails = (parameter) => {
    return new Promise((resolve, reject) => {
        console.log('------- inside agregate of operation file ')
        // studentSchema.aggregate([{ $group: { '_id': 0, "studentFee": { "$sum": "$student_fee" } } }], function (err, data) {
        // studentSchema.aggregate([{$project:{ _id:0, "company_id": 1,"company_name" :1,"annual_income":1  } },{$skip:5}], function (err, data) {
        studentSchema.aggregate([{ "$match": parameter }, { $group: { '_id': 0, "studentFee": { "$sum": "$student_fee" }  , "StudentAvg": { "$avg": "$student_fee" }, "StudentMinFee": { "$min": "$student_fee" }, "StudentMaxFee": { "$max": "$student_fee" } } }], function (err, data) {    
            
            if (err) console.log('error occur' + err);
            else {
                console.log('aggregated data')
                console.log(data);
                resolve(data)
            }
        })
    })

}


module.exports = {
    saveTheStudent: saveTheStudent,
    getTheStudent:getTheStudent,
    updateTheStudent:updateTheStudent,
    getTheSelectedStudent:getTheSelectedStudent,
    fetchAggregatedDetails:fetchAggregatedDetails
}