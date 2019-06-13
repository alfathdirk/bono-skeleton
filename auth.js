const Bundle = require('bono');
const jwt = require('jsonwebtoken');

const { secretJwt } = require('./config');

class Auth extends Bundle {
  constructor() {
    super();
    this.post('/login', this.login.bind(this));
  }

  async login (ctx) {
    let { username, password } = await ctx.parse();
    if (username && password) {
      let token = jwt.sign({ username }, secretJwt);
      return { token, username }
    }
    return { token: null, username: undefined }
  }
}

module.exports = new Auth();
