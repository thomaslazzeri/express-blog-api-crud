import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/posts', postsRouter);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});