function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

function getPalindrome(n) {
    return parseInt(n.toString().split("").reverse().join(""));
}

let num = parseInt(process.argv[2]);
if (isPrime(num)) {
    let palindrome = getPalindrome(num);
    console.log("Palindrome:", palindrome);
    console.log(isPrime(palindrome) ? "Palindrome is also Prime" : "Palindrome is not Prime");
} else {
    console.log("Not a Prime Number");
}
