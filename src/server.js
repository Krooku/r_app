
// if (process.env.NODE_ENV === 'dev') 
require('dotenv').config()
const express = require('express')
const session = require('express-session')
const SQLiteStore = require('connect-sqlite3')(session)
const path = require('path')

const app = express()
const mongoose = require('mongoose')
const router = require('./routes')

app.use(session({
    // @ts-ignore
    store: new SQLiteStore({
      db: 'sessions.db'
    }),
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true
    }
  }))
app.use(express.json({limit: '50mb'}));
app.use('/api', router)
app.use('/', express.static(path.join(__dirname, '/../public/')))
app.get(/.*/, (req, res) => res.sendFile(path.join(__dirname, '/../public/index.html')))

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }).then(async () => {
    const port = process.env.PORT || 3000
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`)
    })
  }).catch((error) => {
    console.log('Error occured while initializing server')
    console.error(error)
    process.exit()
  })


  