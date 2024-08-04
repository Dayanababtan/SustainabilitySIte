const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to Sustainable Living API');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const tipsRoutes = require('./tips');
const articlesRoutes = require('./articles')

app.use('/tips', tipsRoutes);
app.use('/articles', articlesRoutes);

module.exports = app;