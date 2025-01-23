const express = require('express')
const app = express()
const port = 3000
//express.static is built in middleware

// app.use middleware ko use karne ke liye hota hai
app.use(express.static('public'))
//app.get or app.post or app.put or app.delete(path,handler);
app.get('/', (req, res) => {
  res.send('Hello World1234!')
})
app.get('/about', (req, res) => {
  res.send('Hello about!')
})
app.get('/contact', (req, res) => {
  res.send('Hello Contact Us!')
})
app.get('/sign', (req, res) => {
  res.send('Pls Sign in !')
})
app.get('/Keshav', (req, res) => {
  res.send('Hello Keshav !')
})
app.get('/blogs/:slug/:sec', (req, res) => {
  res.send(`this is ${req.params.slug} and ${req.params.sec}`)
})
app.get('/blogs/:slug', (req, res) => {
  console.log(`hiiiii ${req.params}`)
  res.send(`this is ${req.params} and ${req.query} `)
})

// app.get('/Keshav/age', (req, res) => {
//   res.send('I am 20 years old!')
// })
// app.get('/Keshav/bio', (req, res) => {
//   res.send('Hello i am keshav ,and I am a Full Stack Developer!')
// })




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})