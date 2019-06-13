const Bundle = require('bono');

class Api extends Bundle {
  constructor() {
    super();
    this.get('/', this.index.bind(this));
    this.get('/anu', this.anu.bind(this));
    this.post('/anu', this.anupost.bind(this));
  }

  index(ctx) {
    return ctx.state.user;
  }

  async anupost(ctx) {
    let data = await ctx.parse();
    console.log(data);
    return {
      halo: "halo saya" + data.username,
      pwd: "halo password saya" + data.password
    }
  }

  anu () {
    return {
      a: '1',
      b: '2'
    }
  }
}

module.exports = new Api();
