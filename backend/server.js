import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import listEndpoints from 'express-list-endpoints'

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
});

const Product = mongoose.model('Product', {
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  byArtist: {
    type: String,
  },
});

// endpoint for users later on?


// AUTHENTICATE USER?

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
  const artists = await Artist.find();
  res.json({ success: true, artists });
})

// endpoint to post artists
app.post('/artists', async (req, res) => {
  const { artistName } = req.body
  console.log(req.body)

  try {
    const savedArtist = await new Artist({ artistName }).save()
    res.status(400).json({ 
      success: true, 
      artistID: savedArtist._id,
      artistName: savedArtist.artistName
    });
  } catch (error) {
    res.status(400).json({ message: 'Could not save artist', error: err.errors })
  }
})

// endpoint to get products
app.get('/products', async (req, res) => {
  const products = await Product.find()
  res.json({ success: true, products });
})

// endpoint to post products
app.post('/products', async (req, res) => {
  const { productName, price, description, byArtist } = req.body
  console.log(req.body)

  try {
    const savedProduct = await new Product({
      productName,
      price,
      description,
      byArtist
    }).save()
    res.status(400).json({ 
      success: true,
      productID: savedProduct._id,
      description: savedProduct.description,
      byArtist: savedProduct.byArtist,
      price: savedProduct.price,
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


