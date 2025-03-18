let n = parseInt(process.argv[2]);
for (let i = 0; Math.pow(2, i) <= 256 && i <= n; i++) {
    console.log(`2^${i} = ${Math.pow(2, i)}`);
}
