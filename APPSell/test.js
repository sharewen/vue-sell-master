const path = require('path')
const src = path.resolve(__dirname,'./src')
console.log(src)
console.log(__dirname,'dirname')

const express=require('express')
const app=express()



console.log(app.get('env')) 
console.log(app,'express()') 

 const apiRoutes = express.Router()

console.log(apiRoutes,'router')



