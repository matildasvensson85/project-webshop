import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import listEndpoints from 'express-list-endpoints'
import crypto from 'crypto'
import bcrypt from 'bcrypt'
import { nextTick } from 'process'
import dotenv from 'dotenv'
import cloudinaryFramework from 'cloudinary'
import multer from 'multer'
import cloudinaryStorage from 'multer-storage-cloudinary'

dotenv.config()

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
  artistID: {
    type: String,
  },
  password: {
    type: String,
    required: true
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString('hex')
  },
  presentation: {
    type: String
  },
  photo: {
    type: String,
  }
})

// const ProfilePic = mongoose.model('ProfilePic', {
//   name: String,
//   imageUrl: String,
//   // ofArtist: {
//   //   type: mongoose.Schema.Types.ObjectId,
//   //   ref: 'Artist'
//   // }
//   ofArtist: String,
//   photoID: String
// })


const Product = mongoose.model('Product', {
  productName: {
    type: String,
    // required: true
  },
  productID: {
    type: String,
  },
  price: {
    type: Number
  },
  category: {
    type: String
  },
  color: {
    type: String
  },
  description: {
    type: String
  },
  photo: {
    type: String
  },
  artistID: {
    type: String,
  },
  artistName: {
    type: String,
  },
    byArtist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Artist'
  }
});

// const ProductPhoto = mongoose.model('ProductPhoto', {
//   imageUrl: String,
//   // ofArtist: {
//   //   type: mongoose.Schema.Types.ObjectId,
//   //   ref: 'Artist'
//   // }
//   byArtist: String,
//   photoID: String

// })


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

// Cloudinary
const cloudinary = cloudinaryFramework.v2; 
cloudinary.config({
  cloud_name: 'dx0ku6mdm', // this needs to be whatever you get from cloudinary
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

const storage = cloudinaryStorage({
  cloudinary,
  params: {
    folder: 'profilepic',
    allowedFormats: ['jpg', 'png'],
    transformation: [{ width: 500, height: 500, crop: 'limit' }],
  },
})
const parser = multer({ storage })




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

// endpoint to register artists
app.post('/register', async (req, res) => {
  const { artistName, password } = req.body

  try {
    const salt = bcrypt.genSaltSync()

    const newArtist = await new Artist({ 
      artistName,
      password: bcrypt.hashSync(password, salt)
    }).save()
    res.json({ 
      success: true, 
      artistID: newArtist._id,
      artistName: newArtist.artistName,
      accessToken: newArtist.accessToken
    })
  } catch (error) {
    if (error.code === 11000) {
      // should I also add a status code here? see lecture
      res.status(400).json({ message: 'Name is not unique' })
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

// // endpoint to edit profile as an artist
// app.patch('/profile/:id', async (req, res) => {
  
//   try {
//     const { id } = req.params
//     const artistById = await Artist.findById({_id: id })

//     const {
//       presentation = artistById.presentation,
//       photo = artistById.photo
//     } = req.body

//     const editedArtist = await Artist.findByIdAndUpdate({ _id: id}, { presentation, photo }, {new: true})
//     if (editedArtist) {
//       res.json({
//         success: true,
//         editedArtist
//       })
//     } else {
//       res.status(404).json({ success: false, message: 'User not found' })
//     }
//   } catch (error) {
//     res.status(400).json({ success: false, message: 'Invalid request', error });
//   }
// })

// endpoint to edit profile as an artist
app.patch('/profile/:id', parser.single('image'), async (req, res) => {
  
  try {
    const { id } = req.params
    const artistById = await Artist.findById({_id: id })

    const {
      presentation = artistById.presentation,
      photo = artistById.photo
    } = req.body

    const editedArtist = await Artist.findByIdAndUpdate({ _id: id}, { presentation: req.body.presentation, photo: req.file.path }, {new: true})
    if (editedArtist) {
      res.json({
        success: true,
        editedArtist
      })
    } else {
      res.status(404).json({ success: false, message: 'User not found' })
    }
  } catch (error) {
    res.status(400).json({ success: false, message: 'Invalid request', error });
  }
})

// endpoint to post products
// app.post('/products', authenticateArtist)
app.post('/products', parser.single('image'), async (req, res) => {
  const { productName, price, category, color, description, photo, artistID, artistName } = req.body

  try {
    const artist = await Artist.findById(artistID)
    const savedProduct = await new Product({
      productName: req.body.productName,
      // productID: savedProduct._id,
      // productID: req.body._id,
      price: req.body.price,
      category: req.body.category,
      color: req.body.color,
      description: req.body.description,
      photo: req.file.path,
      artistID: req.body.artistID,
      artistName: req.body.artistName,
      // byArtist: artist,
    }).save()
    res.json({ 
      success: true,
      savedProduct,
    })
  } catch (error) {
    res.status(400).json({ 
      success: false,
      message: 'Invalid request', 
      error 
    })
  }
})

// endpoint to upload productPhoto
app.post('/productPhoto', parser.single('image'), async (req, res) => {
  try {
    const productPhoto = await new ProductPhoto({ 
      imageUrl: req.file.path, 
      byArtist: req.body.artistID,
    }).save()
    res.json({
      success: true,
      photoID: productPhoto._id,
      imageUrl: productPhoto.imageUrl,
      byArtist: productPhoto.byArtist
    })
  } catch (err) {
    res.status(400).json({ errors: err.errors })
  }
})

// // endpoint to upload profile picture
app.post('/profilepic', parser.single('image'), async (req, res) => {
  // const artistID = req.body.artistID
  try {
    // const artist = await Artist.findById(artistID)
    const profilePic = await new ProfilePic({ 
      name: req.body.name,
      imageUrl: req.file.path, 
      ofArtist: req.body.artistID,
      // ofArtist: artist
    }).save()
    res.json({
      success: true,
      test: test,
      // profilePic,
      photoID: profilePic._id,
      imageUrl: profilePic.imageUrl,
      name: profilePic.name,
      ofArtist: profilePic.ofArtist
    })
  } catch (err) {
    res.status(400).json({ errors: err.errors })
  }
})





// // endpoint to post products
// // app.post('/products', authenticateArtist)
// app.post('/products', async (req, res) => {
//   const { productName, price, category, color, description, artistID } = req.body

//   try {
//     const artist = await Artist.findById(artistID)
//     const savedProduct = await new Product({
//       productName,
//       price,
//       category,
//       color,
//       description,
//       byArtist: artist,
//     }).save()
//     res.json({ 
//       success: true,
//       // savedProduct,
//       artistName: artist.artistByName,
//       productName: savedProduct.productName,
//       productID: savedProduct._id,
//       price: savedProduct.price,
//       category: savedProduct.category,
//       color: savedProduct.color,
//       description: savedProduct.description,
//       byArtist: savedProduct.byArtist,
//       // artistName: savedProduct.byArtist.artistByName
//     })
//   } catch (error) {
//     res.status(400).json({ 
//       success: false,
//       message: 'Invalid request', 
//       error 
//     })
//   }
// })

// endpoint to get products
app.get('/products', async (req, res) => {
  const products = await Product.find()
  res.json({ 
    success: true, 
    products,

  
  });
})

// endpoint to get profile pictures
app.get('/profilepic', async (req, res) => {
  const profilePics = await ProfilePic.find()
  res.json({ success: true, profilePics });
})

// endpoint to get product pictures
app.get('/productPhoto', async (req, res) => {
  const productPhotos = await ProductPhoto.find()
  res.json({ success: true, productPhotos });
})



// endpoint to get one product by id
app.get('/products/:id', async (req, res) => {
  const { id } = req.params
  const productById = await Product.findOne({_id: id })
  res.json({ success: true, productById});
})



// Start the server
app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server running on http://localhost:${port}`)
})
