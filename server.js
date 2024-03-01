const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const jsonServer = require('json-server');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const nextPort = process.env.PORT || 8080;
const jsonServerPort = 3001;

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  // Next.js server
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;

      if (pathname === '/a') {
        await app.render(req, res, '/a', query);
      } else if (pathname === '/b') {
        await app.render(req, res, '/b', query);
      } else {
        await handle(req, res, parsedUrl);
      }
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  }).listen(nextPort, (err) => {
    if (err) throw err;
    console.log(`> Next.js Ready on http://${hostname}:${nextPort}`);
  });

  // JSON Server setup
  const jsonServerApp = jsonServer.create();
  const jsonRouter = jsonServer.router(path.join(__dirname, 'data', 'db.json'));
  const middlewares = jsonServer.defaults();
  jsonServerApp.use(middlewares);
  jsonServerApp.use('/api', jsonRouter);

  // JSON Server
  createServer((req, res) => {
    jsonServerApp(req, res);
  }).listen(jsonServerPort, () => {
    console.log(`> JSON Server Ready on http://${hostname}:${jsonServerPort}/api`);
  });
});
