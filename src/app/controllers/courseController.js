const Courses = require("../models/course")
const {mongooseToObject} = require('../../util/mongoose')


class courseController{

//[GET] /course/:slug
    show(req, res, next) {
        Courses.findOne({slug:req.params.slug})
        .then(course=>
            res.render("courseDetail", {
                course:mongooseToObject(course)
            })
        )
        .catch(next)
    }



}


module.exports = new courseController