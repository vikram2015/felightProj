let express = require('express');
let router = express.Router();
let InstituteOperation = require('./instituteOperation');
let StudentOperation = require('../student/studentOperation');


//This is The Api for the Get(Read) operation
router.get('/instituteList', function (req, res) {
    console.log('hit the get api');
    InstituteOperation.getTheinstitute().then(function(instituteDetails){
        console.log('---------- institute details ---- '+instituteDetails)
        res.send({
            success: true,
            MSG: 'employ details found',
            instituteData: instituteDetails
        })
    })
});

//This is The Api  for the Save operation
router.post('/saveInstitute', (req, res) => {

    // let studentList = {
    //     name : req.body.instituteName
    // }
    // console.log('student list ====== '+JSON.stringify(studentList))
StudentOperation.getTheSelectedStudent(req.body.instituteName).then(function(studentData){

    console.log(req.body);
    console.log(studentData);
    let instituteData = {
        institute_name: req.body.instituteName,
        institute_batch: req.body.instituteBatch,
        institute_course: req.body.instituteCourse,
        institute_adress: req.body.instituteAdress,
        student_name : studentData._id,
        isTrue: true
    }
    InstituteOperation.saveTheInstitute(instituteData).then(function (savedData) {

        res.send({
            success: true,
            Msg: "successfully Saved The Record",
            savedData : savedData
        })
    })
})
});


//This is The Api  for the Update operation
router.post('/updateInstitute', function(req, res){
    console.log('reached the get file');
    console.log(req.body);
    let instituteObj = {
        id : req.body._id,
        formData: req.body
    }
    InstituteOperation.updateTheinstitute(instituteObj).then(function(responseAfterUpdation){

        if(responseAfterUpdation){
            res.send({
                success : true,
                MSG:"Updated Successfully",
                responseAfterUpdation : responseAfterUpdation
            })
        }
    })
})

module.exports = router;