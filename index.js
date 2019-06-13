const http = require('http');
const Bundle = require('bono');

const authMiddleware = require('./middlewares/auth');
const { HTTP_PORT } = require('./config');

const api = require('./api');
const auth = require('./auth');

let app = new Bundle();

app.use(require('bono/middlewares/json')());

// api.use(authMiddleware);

app.bundle('/api', api);
app.bundle('/auth', auth);

app.get('/', (ctx) => 'hello world');

let server = http.createServer(app.callback());

server.listen(HTTP_PORT, () => console.log(`server listen on port ${HTTP_PORT}`));
