import express from 'express';
import { getAllPosts, getPostById, deletePost, storePost, updatePost } from '../controllers/controller.js';

const router = express.Router();

router.get('/', getAllPosts);

router.get('/:id', getPostById);

router.post('/', storePost);

router.put('/:id', updatePost);

router.delete('/:id', deletePost);

export default router;