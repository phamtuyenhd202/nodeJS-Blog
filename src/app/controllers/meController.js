const Courses = require("../models/course")
const {mutipleMongooseToObject} = require('../../util/mongoose')


class meController{

//[GET] /me/stored/courses
    storedCourses(req, res, next) {
        Courses.find({})
        .then(courses => res.render('me/stored_courses',{
            courses: mutipleMongooseToObject(courses)
        }))
        .catch(next)
        
        

}
}


module.exports = new meController