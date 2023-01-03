// Requiring modules
const { basename } = require('path')
const express = require("express");
const app = express();

// Root route of express app
app.use(express.static('./', {
  cacheControl: false,
  // immutable: true,
  // maxAge: 600000,
  // etag: false
  setHeaders: (res, path) => {
    res.set({
      'cache-control': 'public, max-age=600, immutable',
      'etag': '"' + basename(path) + '"',
    })
  }
}))

// Server setup
app.listen(3001, () => {
  console.log(
`Server listening on http://localhost:3001`);
});