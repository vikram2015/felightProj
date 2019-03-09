let InstituteSchema = require('./instituteSchema');
let promise = require('promise');

//DB Operation for Save operation
let saveTheInstitute = (parameter) => {
    return new promise(function (resolve, reject) {

        let saveInstitute = new InstituteSchema(parameter);
        saveInstitute.save().then(function (savedData) {
            console.log('this is operation file after save' + savedData);
            resolve(savedData);
        })
    })

}

//DB Operation for Get operation using populate
let getTheinstitute = (parameter) => {
    return new promise(function (resolve, reject) {
        InstituteSchema.find()
        .populate('student_name')
            .exec()
            .then(function (savedData) {
            console.log('this is operation file get institute populate' + savedData);
            resolve(savedData);
        })
    })

}
//DB Operation for Update operation
let updateTheinstitute = (parameter) => {
    return new promise(function (resolve, reject) {
        InstituteSchema.findByIdAndUpdate(parameter.id, {$set:parameter.formData}).then(function(updatedData){
            resolve(updatedData);
        })
    })

}


module.exports = {
    saveTheInstitute: saveTheInstitute,
    getTheinstitute:getTheinstitute,
    updateTheinstitute:updateTheinstitute
}