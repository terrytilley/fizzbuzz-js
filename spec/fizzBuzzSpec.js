describe("FizzBuzz", function() {

  beforeEach(function() {
    fizzbuzz = new FizzBuzz();
  });

  it("Should return Fizz if 3", function() {
    expect(fizzbuzz.play(3)).toEqual("Fizz");
  });

  it("Should return Buzz if 5", function() {
    expect(fizzbuzz.play(5)).toEqual("Buzz");
  });

  it("Should return FizzBuzz if 15", function() {
    expect(fizzbuzz.play(15)).toEqual("FizzBuzz");
  });

  it("Should return number if not FizzBuzz", function() {
    expect(fizzbuzz.play(7)).toEqual(7);
  });

});
