
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

  get publicUrl() {
    if ( ! process.env.REACT_APP_PUBLIC_URL ) {
      return 'http://localhost:1234';
    }
    return process.env.REACT_APP_PUBLIC_URL
  }
}

export default new Config();