const Scooter = require('../src/Scooter')
const User = require('../src/User')


let person = new User('mike', 'password123', 46)

let scooter1 = new Scooter('abc123')

//typeof scooter === object
describe('scooter object', () => {
  test('Scooter class should create Scooter instance', () => {
    const scooter = new Scooter();
    expect(scooter).toBeInstanceOf(Scooter);
  });
})

//Method tests
describe('scooter methods', () => {
  // tests here!

  //rent method
test('rent method should see if charge is over 20 and not broken, then set the user to the user passed in and set station to null', ()=>{

  scooter1.rent(person);

  let receieved = {
    'user': scooter1.user,
    'station': scooter1.station
  }

  let expected = {
    'user': person, 
    'station': null
  }

  expect(receieved).toEqual(expected)
  
})

  //dock method
  test("dock method should set the station the dock site and set the user to null", ()=> {

    scooter1.rent(person);
    scooter1.dock('hij456');

    let receieved = {
      "user": scooter1.user, 
      'station': scooter1.station
    }

    let expected = {
      "user": null, 
      'station': 'hij456'
    }

    expect(receieved).toEqual(expected)
    
    
  })
  //requestRepair method

  //charge method

})
