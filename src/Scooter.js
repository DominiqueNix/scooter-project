class Scooter{
  // scooter code here
  static nextSerial = 1;

  constructor(station){
    this.station = station
    this.user = null; //all scooters start off docked
    this.serial = Scooter.nextSerial //serial is assigned based on nextSerial
    Scooter.nextSerial += 1; //adds one to the nextserial every time a new scooter is created
    this.charge = 100; // all scooters atart fully charged
    this.isBroken = false //all scooters start fully functional
  }

  rent(user){
    if(this.charge > 20 && this.isBroken == false){
      this.station = null
      this.user = user
    } else {
      throw new Error("scooter needs to charge or scooter needs repair")
    }
  }

  dock(station){
    this.station = station;
    this.user = null
  }
}



module.exports = Scooter
