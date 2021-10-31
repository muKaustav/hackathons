const cors = require('cors')
const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))

AadhaarDB = mongoose.createConnection(
	'mongodb+srv://atlasAdmin:zY78wlSbEdiTzTAe@cluster0.irbo7.mongodb.net/MockAadhaar',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

HotelDB = mongoose.createConnection(
	'mongodb+srv://atlasAdmin:zY78wlSbEdiTzTAe@cluster0.irbo7.mongodb.net/HotelDB',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)

const residentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  aadhaar: { type: Number, unique: true },
  phone: String,
  mock_image: Boolean
})

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: { type: String, unique: true },
  phone: { type: String, unique: true },
  expiry: Date,
  face_image: String
})

// GET /resident

app.get('/resident', (req, res) => {
  const Resident = AadhaarDB.model('User', residentSchema)

  Resident.find({}, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.send(data)
    }
  })
})

// GET /resident/:aadhaar

app.get('/resident/:aadhaar', (req, res) => {
  const Resident = AadhaarDB.model('User', residentSchema)

  Resident.find({ aadhaar: req.params.aadhaar }, (err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
})

// POST /resident

app.post('/resident', (req, res) => {
  const Resident = AadhaarDB.model('User', residentSchema)

  const resident = new Resident({
    name: req.body.name,
    aadhaar: req.body.aadhaar,
    phone: req.body.phone,
    mock_image: req.body.mock_image
  })

  resident.save((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
})

// GET /hotel/:hotelName

app.get('/hotel/:hotelName', (req, res) => {
  const Hotel = HotelDB.model(req.params.hotelName, hotelSchema)

  Hotel.find({}, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.send(data)
    }
  })
})

// GET /hotel/:hotelName/:email/:phone

app.get('/hotel/:hotelName/:email/:phone', (req, res) => {
  const Hotel = HotelDB.model(req.params.hotelName, hotelSchema)

  Hotel.find(
		{ email: req.params.email, phone: req.params.phone },
		(err, data) => {
  if (err) {
    res.send(err)
  } else {
    res.send(data)
  }
}
	)
})

// POST /hotel/:hotelName

app.post('/hotel/:hotelName', (req, res) => {
  const Hotel = HotelDB.model(req.params.hotelName, hotelSchema)

  const hotel = new Hotel({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    expiry: req.body.expiry,
    face_image: req.body.face_image
  })

  hotel.save((err, data) => {
    if (err) {
      res.send(err)
    } else {
      res.send(data)
    }
  })
})

// // login auth
// app.get('/login', (req, res) => {
//   res.sendFile(__dirname + '/serverhtml/login.html')
// })

// // gauti success page
// app.get('/success', (req, res) => {
//   res.sendFile(__dirname + '/public/success.html')
// })

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'public', 'index.html'))
})

PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log('Server running.')
})
