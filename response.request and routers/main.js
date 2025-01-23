const express = require('express')
const blog = require('./routes/blog');
const app = express()
const port = 3000
// app.use('/blog',blog);
app.use(express.static("public"))

// app.get('/', (req, res) => {
//   console.log('Hello its a get request!')
//   res.send('Hello World2!')
// }).post('/', (req, res) => {
//   console.log('Hello its a post request!')
//   res.send("Hello World post")
// }).put('/', (req, res) => {
//   console.log('Hello its a put request!')
//   res.send("Hello World put")
// })
// app.delete('/', (req, res) => {
//   console.log('Hello its a delete request!')
//   res.send("Hello World delete")
// })
// //html file to render
// app.get("/index",(req,res)=>{
//   console.log("Hey its index");
//   res.sendFile('index.html' , {root:__dirname})

  
// })
// app.get('/api', (req, res) => {
//   console.log('Hello its a get request!')
//   res.json({a:1,b:2,c:3,d:4, name:["Keshav","Badal","Sakshi","Shubham"]})
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})