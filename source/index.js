require('dotenv').config();
const Koa = require('koa');
const convert = require('koa-convert');
const logger = require('koa-logger');
const routers = require('./routers');

const db = require('./db');
const app = new Koa();

app.use(logger());
app.use(routers.api);
app.listen(process.env.PORT);

console.log(`start project on ${process.env.PORT}`);
