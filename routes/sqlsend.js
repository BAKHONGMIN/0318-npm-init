var express = require('express');
const res = require('express/lib/response');
var router = express.Router();

router.get('/', (req, res) => {
    res.send('/sqlsend라는 요청 응답');
})

exports.modules = router;