
var express = require('express');
var router = express.Router();

var getsend = reqiure('./routes/getsand')
var postsend = reqiure('./routes/postsend')
var sqlsend = reqiure('./routes/sqlsend')


app.get('/',(req, res) => {
    res.send('첫페이지 무사출력되나?');
})

app.use('/getsend',getsend)
app.use('/postsend',postsend)
app.use('/sqlsend',sqlsend)

app.listen(8000, () => {
    console.log('콘솔창을 확인해봐')
})