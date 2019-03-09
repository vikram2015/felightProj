let express = require('express');
let router = express.Router();
let StudentOperation = require('./studentOperation');

//This is The Api for the Get(Read) operation
router.get('/studentList', function (req, res) {
    console.log('hit the get api');
    StudentOperation.getTheStudent().then(function(studentDetails){
        console.log('---------- student details ---- '+studentDetails)
        res.send({
            success: true,
            MSG: 'employ details found',
            studentData: studentDetails
        })
    })
});

//This is The Api  for the Save operation
router.post('/saveStudent', (req, res) => {
    console.log(req.body);
    let studentData = {
        student_name: req.body.studentName,
        student_batch: req.body.studentBatch,
        student_course: req.body.studentCourse,
        student_fee: req.body.studentFee,
        student_adress: req.body.studentAdress,
        student_institute: req.body.studentInstitute,
        isTrue: true
    }
    StudentOperation.saveTheStudent(studentData).then(function (savedData) {
        res.send({
            success: true,
            Msg: "successfully Saved The Record",
            savedData : savedData
        })
    })
});


//This is The Api  for the Update operation
router.post('/updateStudent', function(req, res){
    console.log('reached the get file');
    console.log(req.body);
    let studentObj = {
        id : req.body._id,
        formData: req.body
    }
    StudentOperation.updateTheStudent(studentObj).then(function(responseAfterUpdation){

        if(responseAfterUpdation){
            res.send({
                success : true,
                MSG:"Updated Successfully",
                responseAfterUpdation : responseAfterUpdation
            })
        }
    })
})

router.get('/aggregateStudent', function (req, res) {
    let studentAdress = req.query.studentAdress;
    // var query = {company_id:121};
    let query = { student_adress: studentAdress };
    console.log('query')
    console.log(query)
    StudentOperation.fetchAggregatedDetails(query)
        .then((StudentData) => {
            res.send({
                success: true,
                MSG: 'Student Details found',
                StudentData: StudentData
            })
        })
});

module.exports = router;