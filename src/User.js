class User {
  // User code here
  constructor(username, password, age){
    this.username = username;
    this.password = password;
    this.age = age;
    this.loggedIn = false; //user not loggedin when first registered
  }

  login(password){
    if(this.password == password){
      this.loggedIn = true
    } else {
      throw new Error("incorrect password")
    }
  }

  logout(){
    this.loggedIn = false
  }

}


module.exports = User
