
class Config {
  constructor() {
    this._basedir = __dirname + '/../..';
  }

  get basedir() {
    return this._basedir;
  }
}

export default new Config();