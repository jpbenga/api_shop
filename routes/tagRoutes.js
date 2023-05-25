const express = require('express');
const router = express.Router();
const tagController = require('../controllers/tagController');

// GET /tags
router.get('/', tagController.getAllTags);

// POST /tags
router.post('/', tagController.createTag);

// GET /tags/:id
router.get('/:id', tagController.getTagById);

// PUT /tags/:id
router.put('/:id', tagController.updateTag);

// DELETE /tags/:id
router.delete('/:id', tagController.deleteTag);

module.exports = router;
