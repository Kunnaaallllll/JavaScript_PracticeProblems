let choice = parseInt(process.argv[2]);
let value = parseFloat(process.argv[3]);

switch (choice) {
    case 1:
        if (value >= 0 && value <= 100) 
            console.log("Celsius to Fahrenheit:", (value * 9/5) + 32);
        else console.log("Invalid Input");
        break;
    case 2:
        if (value >= 32 && value <= 212) 
            console.log("Fahrenheit to Celsius:", (value - 32) * 5/9);
        else console.log("Invalid Input");
        break;
    default:
        console.log("Invalid Choice");
}
