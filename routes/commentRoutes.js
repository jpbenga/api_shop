const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// GET /comments
router.get('/', commentController.getAllComments);

// POST /comments
router.post('/', commentController.createComment);

// GET /comments/:id
router.get('/:id', commentController.getCommentById);

// PUT /comments/:id
router.put('/:id', commentController.updateComment);

// DELETE /comments/:id
router.delete('/:id', commentController.deleteComment);

module.exports = router;
