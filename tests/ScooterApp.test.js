const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')

const scooterApp = new ScooterApp();
// ScooterApp tests here

// register user
describe("registerUser method tests", () => {
  test("Should return instance of User", () => {
    let response = scooterApp.registeredUser("Joe Bloggs", "test123", 21);
    expect(response).toBeInstanceOf(User);
  });

  // log in
  test("loginUser method should change user loggedIn state to true if user exsists", () =>{
    scooterApp.registeredUser("Becca", "test123", 21);
    scooterApp.loginUser("Becca", "test123")
    expect(scooterApp.registeredUsers['Becca'].loggedIn).toBe(true)
  })
// log out
  test("logout user should change loggedIn state to false, but only if it is true", () => {
    scooterApp.registeredUser("Mike", "test123", 21);
    scooterApp.loginUser("Mike", "test123")
    scooterApp.logoutUser('Mike')
    expect(scooterApp.registeredUsers['Mike'].loggedIn).toBe(false)
  })

  //create new scooterand 
  test("create a new scooter add it to the correct station", () =>{
    scooterApp.createScooter('abc123');

    let response = scooterApp.stations['abc123'].length;
    expect(response).toBe(1)

    scooterApp.stations['abc123'] = []
  })

// rent scooter
  test("rent scooter should take out scooter from station and rent scooter to the user", () => {
    scooterApp.createScooter('abc123')
    let scooter = scooterApp.stations['abc123'][0]
    let user = new User('Larry', 'test123', 57)
    scooterApp.rentScooter(scooter, user)
    let expected = {
      "allstations" : {
        'abc123' : [], 
        'jk456' : [], 
        'lmn789': []
      }, 
      "scooter" : {
        "station" : null, 
        "user": user, 
        "serial" : 2, 
        "charge" : 100,
        "isBroken" : false
      }
    }
    let allstations = scooterApp.stations;
    let received = {
      "allstations" : allstations, 
      "scooter" : scooter
    }

    expect(received).toEqual(expected)
  })

// dock scooter
  test("dockScooter method should add scooter to the correct station and succussfully call the dock method from scooter", () => {
    scooterApp.createScooter('abc123')
    let scooter = scooterApp.stations['abc123'][0]
    let user = new User('Brad', 'test123', 57)
    scooterApp.rentScooter(scooter, user)
    scooterApp.dockScooter(scooter, 'lmn789')
    let expected = {
      "allstations" : {
        'abc123' : [], 
        'jk456' : [], 
        'lmn789': [scooter]
      }, 
      "scooter" : {
        "station" : "lmn789", 
        "user": null, 
        "serial" : 3, 
        "charge" : 100,
        "isBroken" : false
      }
    }
    let allstations = scooterApp.stations;
    let received = {
      "allstations" : allstations, 
      "scooter" : scooter
    }

    expect(received).toEqual(expected)
  })

});

