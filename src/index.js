const path = require('path'); 
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars').engine

const methodOverride = require('method-override')

const route = require('./routes')
const db = require('./config/db')

const app = express()
const port = 3000

db.connect()

// xử lý file tĩnh
app.use(express.static(path.join(__dirname, "public")))

app.use(express.urlencoded({ extended:true}))
app.use(express.json())
//ghi đè phương thức
app.use(methodOverride('_method'))

//HTTP logger
app.use(morgan('combined'))

//tempalate engine

app.engine('hbs', handlebars({
   extname: '.hbs',
   helpers: {
      sum: (a,b) => a + b
  }
 }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));

route(app)


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

