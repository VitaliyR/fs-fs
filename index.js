const fs = require('fs');

const handler = methodName => (...params) => new Promise((res, rej) => {
  fs[methodName](...params, (e, d) => {
    if (typeof d === 'undefined') {
      return e && e.name === 'Error' ? rej(e) : res(e);
    }
    if (e) {
      return rej(e);
    }
    return res(d);
  });
});

const proxy = new Proxy(fs, {
  native: fs,
  get(_, method) {
    return method === 'native' ? this.native : (fs[method] && handler(method));
  }
});

module.exports = proxy;
