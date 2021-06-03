import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import listEndpoints from 'express-list-endpoints'
import crypto from 'crypto'
import bcrypt from 'bcrypt'
import { nextTick } from 'process'

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/artistsWebshop"
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise

// MODELS

const Artist = mongoose.model('Artist', {
  artistName: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString('hex')
  }
})

const Product = mongoose.model('Product', {
  productName: {
    type: String,
    required: true
  },
  price: {
    type: Number
  },
  description: {
    type: String
  },
    byArtist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Artist'
  }
});

// endpoint for users later on?

// AUTHENTICATE USER 
const authenticateArtist = async (req, res, next) => {
  const accessToken = req.header('Authorization')
  console.log(req.body)
  try {
    const artist = await Artist.findOne({ accessToken })
    if (artist) {
      next()
    } else {
      res.status(401).json({ success: false, message: 'Not authorized'})
    }
  } catch (error) {
    res.status(400).json({ success: false, message: 'Invalid request', error})
  }
}

const port = process.env.PORT || 8080
const app = express()

app.use(cors())
app.use(bodyParser.json())

// ROUTES
app.get('/', (req, res) => {
  res.send(listEndpoints(app))
})

// endpoint to get artists
app.get('/artists', async (req, res) => {
  // get one artist by name
  const { name } = req.query
  if (name) {
    const artistByName = await Artist.findOne({ artistName: name})
    res.json({ success: true, artistByName })
  } else {
    const artists = await Artist.find();
    res.json({ success: true, artists });
  }
})

// endpoint to get one artist by id
app.get('/artists/:id', async (req, res) => {
  const { id } = req.params
  const artistById = await Artist.findOne({_id: id })
  res.json(artistById)
})

// endpoint to registrate artists
app.post('/register', async (req, res) => {
  const { artistName, password } = req.body

  try {
    const salt = bcrypt.genSaltSync()

    const newArtist = await new Artist({ 
      artistName,
      password: bcrypt.hashSync(password, salt)
    }).save()
    res.status(400).json({ 
      success: true, 
      artistID: newArtist._id,
      artistName: newArtist.artistName,
      accessToken: newArtist.accessToken
    })
  } catch (error) {
    if (error.code === 11000) {
      // should I also add a status code here? see lecture
      res.json({ message: 'Name is not unique' })
    } else {
    res.status(400).json({ success: false, message: 'Invalid request', error })
    }
    
  }
})

// endpoint to log in as an artist
app.post('/signin', async (req, res) => {
  const { artistName, password } = req.body

  try {
    const artist = await Artist.findOne({ artistName })

    if (artist && bcrypt.compareSync(password, artist.password)) {
      res.json({
        success: true,
        artistID: artist._id,
        artistName: artist.artistName,
        accessToken: artist.accessToken
      })
    } else {
      res.status(404).json({ success: false, message: 'User not found' })
    }
  } catch (error) {
    res.status(400).json({ success: false, message: 'Invalid request', error });
  }
})

// endpoint to get products
app.get('/products', async (req, res) => {
  const products = await Product.find()
  res.json({ success: true, products });
})

// endpoint to get one product by id
app.get('/products/:id', async (req, res) => {
  const { id } = req.params
  const productById = await Product.findOne({_id: id })
  res.json(productById)
})

// endpoint to post products
app.post('/products', authenticateArtist)
app.post('/products', async (req, res) => {
  const { productName, price, description, artistID } = req.body
  console.log(req.body)

  try {
    const artist = await Artist.findById(artistID)
    const savedProduct = await new Product({
      productName,
      price,
      description,
      byArtist: artist
    }).save()
    res.status(400).json({ 
      success: true,
      productID: savedProduct._id,
      productName: savedProduct.productName,
      price: savedProduct.price,
      description: savedProduct.description,
      artistID: savedProduct.byArtist,
    })
  } catch (error) {
    res.status(400).json({ 
      success: false,
      message: 'Invalid request', 
      error 
    })
  }
})

// Start the server
app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server running on http://localhost:${port}`)
})


