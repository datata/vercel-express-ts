import express, { Request, Response } from 'express';

const app = express();

const PORT = process.env.PORT || 4000;

app.get('/', (__req: Request, res: Response) => {
    return res.send('Welcome to my app')
});

app.get('/healthy', (__req: Request, res: Response) => {
    return res.send('Healthy')
});

app.get('/products', (__req: Request, res: Response) => {
    return res.send('All Products')
});

app.listen(PORT, () => {
    console.log("Server running on port:" + PORT);
})
