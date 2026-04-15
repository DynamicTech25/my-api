const express = require('express');
const app = express();

const PORT = 3000;

// Root endpoint
app.get('/', (req, res) => {
  res.status(200).json({
    message: "API is running"
  });
});

// Health endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    message: "healthy"
  });
});

// Me endpoint
app.get('/me', (req, res) => {
  res.status(200).json({
    name: "Damilola Balogun",
    email: "damilolabalogun0407@gmail.com",
    github: "https://github.com/DynamicTech25"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
