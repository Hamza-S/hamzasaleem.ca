import axios from "axios";

class Auth {
  constructor() {
    this.authenticated = false;
    this.login = this.login.bind(this);
    this.setAdmin = this.setAdmin.bind(this);
  }

  async login(user, pass) {
    const res = await axios
      .post("http://localhost:8080/auth", {
        user: user,
        pass: pass,
      })
      .then((res) => {
        if (res.data == "valid") {
          this.setAdmin();
        }
        console.log(this.isAdmin());
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
