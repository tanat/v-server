const jwt = require('koa-jwt');
const convert = require('koa-convert');
const Router =  require('koa-router');

const recipesCtrls = require('./controllers/recipes');

jwtConf = {
  key: process.env.JWT_KEY || 'key',
  secret: process.env.JWT_SECRET || 'secret',
  expiresIn: '1d',
  alg: 'HS256'
};

const opts = {
  prefix: '/api'
};

const apiRouter = Router(opts);

/*
apiRouter.use(async (ctx, next) => {
  try {
    const decoded = jwt.verify(ctx.headers.authorization, jwtConf.key);
    if (decoded.username !== undefined) {
      ctx.state.user = decoded;
      await next();
    } else {
      ctx.throw({
        status: 401
      })
    }
  } catch (err) {
    ctx.throw(err, 401)
  }
});
*/

/*
const protectRoutes = convert(jwt({
  secret: jwtConf.secret,
  passthrough: true
}))
*/

apiRouter.get('/recipes', recipesCtrls.getAll);

module.exports = {
  api: apiRouter.routes(),
};
