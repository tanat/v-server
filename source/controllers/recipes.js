module.exports = {
  getAll: async (ctx, next) => {
    ctx.body = '{"users": [1,2,3]}';
    ctx.status = 200;
    ctx.set('Content-Type', 'application/json');
    await next();
  }
};
