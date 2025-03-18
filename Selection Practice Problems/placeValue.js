let num = parseInt(process.argv[2]);
let values = {1: "Unit", 10: "Ten", 100: "Hundred", 1000: "Thousand"};
console.log(values[num] || "Invalid Input");
