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
    
//GET /courses/:id/edit
    edit(req, res, next) {
        Courses.findById(req.params.id)
        .then(course=> res.render("courses/edit",{
            course: mongooseToObject(course),
        }))
        .catch(next)
        
    }
    //[PUT] /course/:id
    update(req, res, next) {
        Courses.updateOne({_id: req.params.id}, req.body)
        .then(()=>res.redirect('/me/stored/courses'))
        .catch(next)
        
    }

    //[DELETE] /courses/:id
    delete(req, res, next) {
        Courses.delete({_id: req.params.id})
        .then(()=>res.redirect('back'))
        .catch(next)
        
    }

    //[DELETE] /courses/:id/force
    forceDelete(req, res,next) {
        Courses.deleteOne({_id: req.params.id})
        .then(()=>res.redirect('back'))
        .catch(next)
    }
    //[PATCH] /courses/:id/restore
    restore(req, res, next) {
        Courses.restore({_id: req.params.id})
        .then(()=>res.redirect('/me/trash/courses'))
        .catch(next)
        
    }
    //[POST] /courses/handle-form-action
    handleFormAction(req, res, next){
        switch(req.body.action){
            case 'delete':
                Courses.delete({_id: {$in: req.body.courseIds}})
                .then(()=>res.redirect('back'))
                .catch(next)
                break;

            default:
                res.json({message: 'Action is invalid!'})

        }
        
    }
    //[POST] /courses/handle-trash-form-action
    handleTrashFormAction(req, res, next){
        switch(req.body.action){
            case 'restore':
                    Courses.restore({_id: {$in: req.body.courseIds}})
                    .then(()=>res.redirect('back'))
                    .catch(next)
                break;
            case 'delete':
                    Courses.deleteMany({_id: {$in: req.body.courseIds}})
                    .then(()=>res.redirect('back'))
                    .catch(next)
                break;

            default:
                res.json({message: 'Action is invalid!'})
        }
    }

}



module.exports = new courseController