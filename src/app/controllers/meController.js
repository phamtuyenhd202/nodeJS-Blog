const Courses = require("../models/course")
const {mutipleMongooseToObject} = require('../../util/mongoose')


class meController{

//[GET] /me/stored/courses
    storedCourses(req, res, next) {

        let courseQuery = Courses.find({})      
        
        // if(req.query.hasOwnProperty('_sort')){
        //     const isvalidType = ['asc', 'desc'].includes(req.query.type)
        //     courseQuery =  courseQuery.sort({
        //         [req.query.column] : isvalidType ? req.query.type : 'desc',
                
        //     })
        //  }


        courseQuery.sortable(req)
        .then((courses)=>res.render('me/stored_courses',{
            courses: mutipleMongooseToObject(courses)
        })
        )
        .catch(next)

    }   



//[GET] /me/trash/courses
    trashCourses(req, res, next) {
        
        let courseQuery = Courses.find({})      
        courseQuery.sortable(req)
        .then((courses)=>res.render('me/stored_courses',{
            courses: mutipleMongooseToObject(courses)
        })
        )
        .catch(next)

    } 
    
}


module.exports = new meController