// backend/routes/index.js
const express = require('express');
const router = express.Router();

router.get('/hello/world', function(req, res) {
  res.cookie('XSRF-TOKEN', req.csrfToken());
  res.send('Hello World!');
});

// router.get('/api/test', function(req, res) {
//     fetch('/api/test', {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "XSRF-TOKEN": `T0saJVun-rJYozQGm8zvkSUU-OGyrlUFUm30`
//     },
//     body: JSON.stringify({ hello: 'world' })
//   }).then(res => res.json()).then(data => console.log(data));
// })



const apiRouter = require('./api');

router.use('/api', apiRouter);

module.exports = router;
