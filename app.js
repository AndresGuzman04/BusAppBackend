import express from 'express';

const app = express();

const PORT = process.env.PORT ?? 3000;

app.use('/', (req, res) => {
    //hello world view
    res.send('Hello World!');
})

app.listen(PORT, () => {
console.log(`Server is running on port http://localhost:${PORT}`);
})
