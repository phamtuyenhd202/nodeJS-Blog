const Courses = require("../models/course")
const {mutipleMongooseToObject} = require('../../util/mongoose')


class meController{

//[GET] /me/stored/courses
    storedCourses(req, res, next) {
        // Promise.all([Courses.find({}), Courses.countDocumentsDeleted()])
        //     .then((result) =>
        //         res.render('me/stored_courses',{
        //             deleteCourses: result[0],
        //             courses: mutipleMongooseToObject(result[1])
        //         })
        //     )
        //     .cath(next)

        Courses.find({})
        .then((courses)=>res.render('me/stored_courses',{
            courses: mutipleMongooseToObject(courses)
        })
        )

    }   



//[GET] /me/trash/courses
    trashCourses(req, res, next) {
        Courses.findDeleted({deleted: true})
        .then(courses => res.render('me/trash_courses',{
            courses: mutipleMongooseToObject(courses.filter(course => course.deleted))
        }))
        .catch(next)
    }

    
}


module.exports = new meController