const express = require('express')
const app = express()

const bodyParser = require('body-parser')

// express 本地服务 默认路由
app.get('/api/get', (req, res) => {
  // console.log(req,res)
  // res.send('hello world222!');
  res.header('Access-Control-Allow-Origin', '*')
  // eslint-disable-next-line no-undef
  reponse = {
    name: 'xiao',
    age: 21
  }
  // eslint-disable-next-line no-undef
  res.end(JSON.stringify(reponse))
  // res.end("jsoncallback("+JSON.stringify(reponse)+")")
})
// 创建 application/x-www-form-urlencoded 编码解析
var urlencodeParser = bodyParser.urlencoded({extended: false})
// post
app.post('/api/post', urlencodeParser, function(req, res) {
  res.header('Access-Control-Allow-Origin', '*')
  // eslint-disable-next-line no-undef
  reponse = {
    name: 'postName',
    age: 'postAge'
  }
  // eslint-disable-next-line no-undef
  res.end(JSON.stringify(reponse))
})

const port = process.env.PORT || 5001

app.listen(port, () => {
  console.log(`server running on ${port}`)
})