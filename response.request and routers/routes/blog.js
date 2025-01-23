const express = require('express')
const app = express()
const router = express.Router()

router.get('/about', (req, res) => {
  res.send('blog page')
})
router.get('/about', (req, res) => {
  res.send('about section')
})

app.listen(3000)

module.exports = router