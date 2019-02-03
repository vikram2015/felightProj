let express = require('express');
let router = express.Router();

router.post('/saveStudent', (req, res)=>{
    console.log(req.body);
    res.send({
        success : true, 
        Msg: "successfully hit the api"
    })
});

router.get('/getStudentDetails', (req, res)=>{
    console.log('this is for getting the api');
})


module.exports = router;