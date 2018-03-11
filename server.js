const fs = require('fs');
const path = require('path');
const express = require('express');
const { createBundleRenderer } = require('vue-server-renderer');

const serverBundle = require('./public/vue-ssr-server-bundle.json');
const clientManifest = require('./public/vue-ssr-client-manifest.json');

const server = express();
const template = fs.readFileSync('./index.html', 'utf-8');
const renderer = createBundleRenderer(serverBundle, {
  template,
  clientManifest,
  runInNewContext: false,
});

server.use(express.static('public'));

server.get('/api/tiles', (request, response) => {
  response.writeHead(200, { 'Content-Type': 'application/json' });

  fs
    .createReadStream(path.join(__dirname, './api/tiles.json'), {
      encoding: 'utf-8',
    })
    .pipe(response);
});

server.get('*', (request, response) => {
  const context = { url: request.url };

  renderer.renderToString(context, (error, html) => {
    if (error) {
      // deal with errors
      console.log('[server] err: ', error);
    }

    response.end(html);
  });
});

server.listen(9000, () => {
  console.log('Server started on port', 9000);
});
