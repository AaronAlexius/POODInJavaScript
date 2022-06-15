class Gear {
  constructor(chainring, cog, wheel) {
   this._chainring = chainring;
   this._cog = cog;
   this._wheel = wheel;
  };
  
  get chainring() {
    return this._chainring;
   };
 
   get cog() {
     return this._cog;
   };
 
   get wheel() {
     return this._wheel;
   }
 
   set setWheel(value) {
     this._wheel = value;
   }
   
   get ratio() {
     return this.chainring / this.cog
   }
   
   get gearInches() {
     return this.ratio * this.wheel.diameter
   }
 }
 
class Wheel {
  constructor(rim, tire) {
    this._rim = rim;
    this._tire = tire;
  }
  get rim() {
    return this._rim;
  };

  get tire() {
    return this._tire;
  };

  get diameter() {
    return this.rim + (this.tire * 2);
  };

  get circumference () {
    return this.diameter * Math.PI;
  };
}

 // Click testing using Quokka pluggin on VSCode

 // Create new objects
 const wheel1 = new Wheel(622, 28)
 const wheel2 = new Wheel(622, 25)
 
 const highestGear = new Gear(52, 11)
 const higherGear = new Gear(52, 14)
 const highGear = new Gear(52, 16)
 const lowGear = new Gear(36, 16)
 const lowerGear = new Gear(36, 19)
 const lowestGear = new Gear(36, 23)

 // Get calculations
console.log(highestGear.ratio)
console.log(higherGear.ratio)
console.log(highGear.ratio)
console.log(lowGear.ratio)
console.log(lowerGear.ratio)
console.log(lowestGear.ratio)

console.log(wheel1.diameter)
console.log(wheel1.circumference)
console.log(wheel2.diameter)
console.log(wheel2.circumference)

// Add wheels to gears && get gear inches
console.log(highGear.setWheel = wheel1)
console.log(highGear.gearInches)

console.log(highestGear.setWheel = wheel1)
console.log(highestGear.gearInches)

console.log(lowestGear.setWheel = wheel2)
console.log(lowestGear.gearInches)