
class Config {
  constructor() {
    this._basedir = __dirname + '/../..';
  }

  get basedir() {
    return this._basedir;
  }

  getPath(suffix, trailer = '/') {
    return this.basedir + trailer + suffix;
  }
    
}

export default new Config();