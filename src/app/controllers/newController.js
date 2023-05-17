class NewController {

    // [GET] /news
    index(req, res){
        res.render('news')
    }
    //[Get] /news/:slug
    show(req, res){
        res.send('hello tuyen');
    }
}

module.exports =new  NewController