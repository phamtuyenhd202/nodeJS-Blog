const mongoose = require('mongoose')
const slug = require('mongoose-slug-updater')
const mongooseDelete = require('mongoose-delete');



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

  //add plugin
  mongoose.plugin(slug)
  Course.plugin(mongooseDelete, {
    deletedAt : true,
    overrideMethods: 'all'
  })
  // Custom query helper
  Course.query.sortable = function (req){
    if(req.query.hasOwnProperty('_sort')){
        const isvalidType = ['asc', 'desc'].includes(req.query.type)
        return  this.sort({
            [req.query.column] : isvalidType ? req.query.type : 'desc',
            
        })
   }
   return this;
  }
  module.exports = mongoose.model('course', Course)
  