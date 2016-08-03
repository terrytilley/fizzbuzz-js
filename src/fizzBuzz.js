function FizzBuzz() {}

FizzBuzz.prototype.isDivisibleBy = function(divisor, number) {
  return number % divisor === 0;
};

FizzBuzz.prototype.play = function(number) {
  if (this.isDivisibleBy(15, number)) {
    return "FizzBuzz";
  } else if (this.isDivisibleBy(5, number)) {
    return "Buzz";
  } else if (this.isDivisibleBy(3, number)) {
    return "Fizz";
  } else {
    return number;
  }
};

var fizzbuzz = new FizzBuzz();

for (var i = 0; i < 100; i++) {
  console.log(fizzbuzz.play(i));
}
