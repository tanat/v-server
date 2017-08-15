const jwt = require('koa-jwt');
const convert = require('koa-convert');
const router =  require('koa-router');


jwtConf = {
  key: process.env.JWT_KEY || 'key',
  secret: process.env.JWT_SECRET || 'secret',
  expiresIn: '1d',
  alg: 'HS256'
};

const opts = {prefix: '/api'}

const publicRouter = router(opts);
const privateRouter = router(opts);


privateRouter.use(async (ctx, next) => {
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
