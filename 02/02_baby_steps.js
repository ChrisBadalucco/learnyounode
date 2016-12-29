var sum = 0;
process.argv.forEach(function(item) {
    if(isNaN(Number(item)) === false) sum += Number(item);
});

console.log(sum);