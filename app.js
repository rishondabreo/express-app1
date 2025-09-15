const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.json({
        message: 'Hello from Express!',
        status: 'success',
        environment: process.env.ENVIRONMENT || 'development'
    });
});

app.get('/health', (req, res) => {
    res.json({ status: 'healthy' });
});

app.listen(port, () => {
    console.log(`Express app running on port ${port}`);
});

module.exports = app;
