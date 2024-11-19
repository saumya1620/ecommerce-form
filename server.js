const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Database connection error:', err));

// Product Schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  imageurl: { type: String, required: true },
});

const Product = mongoose.model('Product', productSchema);

// Routes
app.get('/', (req, res) => {
  res.render('index');
});

app.post('/submit-product', async (req, res) => {
  const { name, price, description, category, imageurl } = req.body;

  try {
    const product = new Product({ name, price, description, category, imageurl });
    await product.save();
    res.render('success', { product });
  } catch (error) {
    res.status(500).send('Error saving product to database.');
  }
});

// Start Server
app.listen(process.env.PORT, () =>
  console.log(`Server running on http://localhost:${process.env.PORT}`)
);
