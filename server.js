const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
// const bodyParser = require('body-parser')

const app = express()
app.use(express.json())
app.use(cors())

conn1 = mongoose.createConnection(
	'mongodb+srv://atlasAdmin:zY78wlSbEdiTzTAe@cluster0.irbo7.mongodb.net/MockAadhaar',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

const dataSchema = new mongoose.Schema({
  name: String,
  aadhaar: Number,
  phone: String,
  mock_image: Boolean
})

app.get('/aadhaar', (req, res) => {
  const State = conn1.model(User, dataSchema)

  State.find({}, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.send(data)
    }
  })
})

app.get('/aadhaar/:aadhaar', (req, res) => {
  const State = conn1.model(User, dataSchema)

  State.find({ aadhaar: req.params.aadhaar }, (err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
})

app.post('/aadhaar', (req, res) => {
  const State = conn1.model(User, dataSchema)

  const state = new State({
    name: req.body.name,
    aadhaar: req.body.aadhaar,
    phone: req.body.phone,
    mock_image: req.body.mock_image
  })

  state.save((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
})

app.get('*', (req, res) => {
  res.redirect('/')
})

PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log('Server running.')
})
