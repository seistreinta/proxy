const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
app.use(cors());
app.use('/api', createProxyMiddleware({ target: process.env.PROXY_TARGET_URL, changeOrigin: true }));

app.listen(3000, () => console.log('Proxy server running on http://localhost:3000'));
