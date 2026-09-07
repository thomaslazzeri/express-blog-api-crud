export const getAllPosts = (req, res) => {
    res.send('Restituisco la lista dei post');
};

export const getPostById = (req, res) => {
    res.send(`Restituisco il post con id ${req.params.id}`);
};

export const deletePost = (req, res) => {
    res.send(`Elimino il post con id ${req.params.id}`);
};