let num = parseInt(process.argv[2]);
let isPrime = num > 1;
for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}
console.log(isPrime ? "Prime" : "Not Prime");
