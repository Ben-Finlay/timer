//removes the first two entries from process.argv
const args = process.argv.slice(2);
//converts all numeric strings to a number.
let numbers = args.map(Number);
//multiplies those numbers by 1000 to convert to milliseconds.
let clockNumbers = numbers.map(x => x * 1000);
//sorts the numbers in order.
clockNumbers = clockNumbers.sort(function(a, b) {
  return a - b;
});
//filters any negative number as well as NaN values
clockNumbers = clockNumbers.filter(function(item) {
  return item > 0;
});
//function which checks our array length (make sure there is something there)
const timer = function(numbers) {
  if (numbers.length === 0) {
    console.log('Please enter positive numeric values for the timer; negative values, and non-numbers will be disregarded.');
    return;
  }
//cycles through the values to get the milliseconds
  for (let number of numbers) {
    setTimeout(() => {
      //outputs a . to stand in for a beep
      process.stdout.write('.');
    }, number);
  }
  
};
//calls the function
timer(clockNumbers);