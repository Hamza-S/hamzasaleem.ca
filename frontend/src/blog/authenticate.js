import axios from "axios";

class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(user, pass) {
    axios.post('http://localhost:9000/auth', {
      user: user,
      pass: pass
    })
    .then(function (res) {
      this.setAdmin()
      if (res === "valid"){
        
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
