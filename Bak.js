var express = require('express')
var getsend = require('./routes/getsend')
var postsend = require('./routes/postsend')
var sqlsend = require('./routes/sqlsend')

var app = express();

app.get('/',(req, res) => {
    res.send('첫페이지 무사출력되나?');
})

app.use('/getsend',getsend)
app.use('/postsend',postsend)
app.use('/sqlsend',sqlsend)

app.listen(8080, () => {
    console.log('콘솔창을 확인해봐 서버구동완료')
})