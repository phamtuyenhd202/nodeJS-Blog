const Courses = require("../models/course")
const {mongooseToObject} = require('../../util/mongoose')


class courseController{

//[GET] /course/:slug
    show(req, res, next) {
        Courses.findOne({slug:req.params.slug})
        .then(course=>
            res.render("courses/courseDetail", {
                course:mongooseToObject(course)
            })
        )
        .catch(next)
    }
//[GET] /course/craete
    create(req, res, next) {
        res.render("courses/create")
    }
//[POST] /course/store
    store(req, res, next) {
        const formData = req.body
        formData.image = `https://img.youtube.com/vi/${req.body.VideoId}/sddefault.jpg`;
        const course = new Courses(formData)
        course.save()
        .then(()=>res.redirect('/'))
        .catch(error => {

        })
    }    

}


module.exports = new courseController