const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3002;

app.get('/products', async (req, res) => {
  const products = [{ id: 10, name: 'Laptop' }, { id: 11, name: 'Phone' }];

  try {
    const response = await axios.get('http://user-service:3001/users');
    res.json({ products, users: response.data });
  } catch (error) {
    res.json({ products, users: 'Error fetching users' });
  }
});

app.listen(PORT, () => {
  console.log(`Product Service listening on port ${PORT}`);
});
