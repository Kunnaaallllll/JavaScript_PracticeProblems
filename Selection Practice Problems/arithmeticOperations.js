let a = parseInt(process.argv[2]), b = parseInt(process.argv[3]), c = parseInt(process.argv[4]);
let results = [a + b * c, a % b + c, c + a / b, a * b + c];
console.log("Max:", Math.max(...results));
console.log("Min:", Math.min(...results));
