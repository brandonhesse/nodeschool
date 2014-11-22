// console.log(process.argv);

var numbers = process.argv.slice(2), sum = 0;
numbers.forEach(function(num) {
  sum += parseInt(num, 10);
});

console.log(sum);
