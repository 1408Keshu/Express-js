const express = require('express')
const app = express()
const fs= require("fs");
const port = 3000
const blog = require('./routes/blog')



app.use('/blog', blog)

app.use(express.static("public"));
//middleware = request ko modify kr krta hai
app.use((res,req,next)=>{
    // console.log(req.headers)
    console.log(req.headers);
    res.Keshav= "I am keshav";
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`)
    console.log("m1")

    next()
})
app.use((res,req,next)=>{
    // console.log(req.headers)
    console.log("m2")
    next()
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('Hello about!' + req.Keshav);
})
app.get('/contact', (req, res) => {
  res.send('Hello contact!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})