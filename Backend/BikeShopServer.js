const express = require('express')
require('dotenv').config()

// const connectDB = require('./config/db')
const path = require('path')

const app = express()

// Connect Database
// connectDB()

// Init Middleware
// No longer body-parser
app.use(express.json({ extended: false }))

// Define Routes

app.use('/api/send', require('./routes/sendEmail'))

// Make uploads folder static
const dirname = path.resolve()

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(dirname, '/frontend/build')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(dirname, 'frontend', 'build', 'index.html'))
  })
} else {
  app.get('/', (req, res) => {
    res.send('API is running...')
  })
}
//
// Make sure middleware is after all other routes

const PORT = process.env.PORT || 5005

app.listen(PORT, () =>
  console.log(`Server started in ${process.env.NODE_ENV} mode on port ${PORT}`)
)
