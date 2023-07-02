module.exports = function sortMiddleware(req, res, next) {
    res.locals._sort = {
        enabled: false,
        type : 'default',
    }
    if(req.query.hasOwnProperty('_sort')){
        // res.locals_sort.enabled= true
        // res.locals_sort.type = res.query.type
        // res.locals_sort.name = req.query.column

        Object.assign(res.locals._sort, {
            enabled: true,
            type: req.query.type,
            column: req.query.column
        })
    }

    next()
}