import axios from "axios";

class Auth {
  constructor() {
    this.authenticated = false;
    this.login = this.login.bind(this);
  }

  login(user, pass) {
    axios.post('http://localhost:9000/auth', {
      user: user,
      pass: pass
    })
    .then( (res) => {
      this.setAdmin()
      if (res === "valid"){
        this.authenticated = true;
      }
    
    })
    .catch(function (error) {
      console.log(error);
    });
    //express call to db to verify credentials and set authenticated to true
    
  }
  setAdmin() {
    this.authenticated = true;
  }
  isAdmin() {
    return this.authenticated;
  }
}

export default new Auth();
