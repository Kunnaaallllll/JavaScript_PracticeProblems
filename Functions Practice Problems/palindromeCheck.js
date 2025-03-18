function areBothPalindromes(num1, num2) {
    let str1 = num1.toString();
    let str2 = num2.toString();
    return str1 === str2.split('').reverse().join('')
}

console.log(areBothPalindromes(52, 25))
