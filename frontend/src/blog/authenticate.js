import axios from "axios";
class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(cb) {
    //express call to db to verify credentials and set authenticated to true
    if (this.authenticated) {
      cb();
    }
  }
  isAdmin() {
    return this.authenticated;
  }
}

export default new Auth();
