// a. Convert 42 inches to feet
let inches = 42;
let feet = inches / 12;
console.log("42 inches in feet:", feet);

// b. Convert Rectangular Plot (60ft x 40ft) to meters (1ft = 0.3048m)
let lengthFeet = 60, widthFeet = 40;
let lengthMeters = lengthFeet * 0.3048;
let widthMeters = widthFeet * 0.3048;
console.log(`Plot in meters: ${lengthMeters}m x ${widthMeters}m`);

// c. Calculate area of 25 such plots in acres (1 sq ft = 0.0000229568 acres)
let areaSqFeet = lengthFeet * widthFeet;
let totalAreaAcres = (areaSqFeet * 25) * 0.0000229568;
console.log("Total Area of 25 plots in acres:", totalAreaAcres);
