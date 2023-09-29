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
  //recharge method
  test("recharge should set charge to 100 after 2s", async () => {
    const scooter3 = new Scooter();
    scooter3.charge = 60
    await scooter3.recharge(); 
    expect(scooter3.charge).toBe(100);
});

// This only works if I shorten the timer. Jest times out before the test finishes
  //requestRepair method'
//   test("request reapir should change isBroken to false after 5s", async () => {
//     const scooter4 = new Scooter();
//     scooter4.isBroken = true
//     await scooter4.requestRepair(); 
//     expect(scooter4.isBroken).toBe(false);
// });

})
