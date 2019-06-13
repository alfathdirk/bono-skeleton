const jwt = require('jsonwebtoken');
const { secretJwt } = require('../config');

module.exports = async function(ctx, next) {
  let token = ctx.get('Authorization').split(' ').pop();
  if (!token) {
    ctx.throw(401);
  }

  try {
    let verify = jwt.verify(token, secretJwt);
    ctx.state.user = { ...verify };
  } catch (error) {
    ctx.throw(401);
  }

  await next();
}
