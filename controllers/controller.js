import { posts } from '../data/posts.js';

export const getAllPosts = (req, res) => {
    try {
        const { tag } = req.query;

        if (tag) {
            const filteredposts = posts.filter(post => post.tags.includes(tag));
            return res.json(filteredposts);
        }

        res.json(posts);

    }

    catch (err) {
        return res.status(404).json({ error: `Non ci sono post da mostrarti` });
    }
};

export const getPostById = (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if (!post) {
        return res.status(404).json({ error: `Post con id ${id} non trovato` });
    }

    res.json(post);
};

export const storePost = (req, res) => {
    console.log(req.body);

    const newPost = {
        id: posts.length > 0 ? posts[posts.length - 1].id + 1 : 1,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags,
    };

    posts.push(newPost);

    res.status(201).json(newPost);
};

export const updatePost = (req, res) => {
    console.log(req.body);

    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    if (!post) {
        return res.status(404).json({ error: `Post con id ${id} non trovato` });
    }

    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;

    res.status(200).json(post);
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