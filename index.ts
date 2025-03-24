import productsRouter from './routes/products';
import express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Ecommerce API is running...');
});
app.use('/products', productsRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
