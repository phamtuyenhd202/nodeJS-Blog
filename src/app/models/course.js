const mongoose = require('mongoose')
const slug = require('mongoose-slug-updater')

mongoose.plugin(slug)

const Schema = mongoose.Schema


const Course = new Schema({
    name: {type: String, required: true},
    description: {type: String, maxLength:600 },
    image: {type: String, maxLength:255 },
    VideoId: {type: String, required: true},
    level: {type: String, maxLength:255 },
    slug: { type: String, slug: 'name', unique: true}

  },{
    timestamps:true
  });

  module.exports = mongoose.model('course', Course)
  