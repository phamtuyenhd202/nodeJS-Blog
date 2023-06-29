const express = require('express');
const router = express.Router();

const coursesController = require('../app/controllers/courseController');

router.get('/create', coursesController.create);
router.post('/store', coursesController.store);
router.get('/:id/edit', coursesController.edit);
router.post('/handle-form-action', coursesController.handleFormAction);
router.post('/handle-trash-form-action', coursesController.handleTrashFormAction);
router.put('/:id', coursesController.update);
router.patch('/:id/restore', coursesController.restore);
router.delete('/:id', coursesController.delete);
router.delete('/:id/force', coursesController.forceDelete);
router.get('/:slug', coursesController.show);


module.exports = router;
