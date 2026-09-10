import { posts } from '../data/posts.js';

export const getAllPosts = (req, res) => {
    const { tag } = req.query;

    if (tag) {
        const filteredposts = posts.filter(post => post.tags.includes(tag));
        return res.json(filteredposts);
    }

    res.json(posts);
};

export const getPostById = (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if (!post) {
        return res.status(404).json({ error: `Post con id ${id} non trovato` });
    }

    res.json(post);
};

export const deletePost = (req, res) => {
    const id = parseInt(req.params.id);
    const index = posts.findIndex(post => post.id === id);

    if (index === -1) {
        return res.status(404).json({ error: `Post con id ${id} non trovato` });
    }

    posts.splice(index, 1);
    console.log(posts);

    res.status(204).end();
};