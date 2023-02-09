//function to be tested
function stringLength(string) {
  let charactersCount = 0;
  for (let char of string) {
    charactersCount++;
  }
  return charactersCount; 
}
//testing with Jest Library and the AAA pattern
test('counts the number of characters in a string', () => {
//arrange
  const string = 'lawrence';
  const expected = 8;
  //act
    const result = stringLength(string);
    //assert
    
    expect(result).toBe(expected);
});

//Task 2
//function to be tested
function reverseString(string) {
    let individualLetters = string.split('');
    let reversedArr = individualLetters.reverse();
    let joinedReversed = reversedArr.join('');
    return joinedReversed;
}

test('reverse the letters in a string', () => {
//arrange
const string = 'lawrence';
const expected = 'ecnerwal';
//act
const result = reverseString(string);
//assert
expect(result).toBe(expected);
});


//Task Three
class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }

  multiply(a, b) {
    return a * b;
  }
}

describe("Calculator - add method", () => {
  const calculator = new Calculator();

  test("Adding two positive numbers", () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test("Adding two negative numbers", () => {
    expect(calculator.add(-2, -3)).toBe(-5);
  });

  test("Adding zero to a number", () => {
    expect(calculator.add(5, 0)).toBe(5);
  });
});

describe("Calculator - subtract method", () => {
  const calculator = new Calculator();

  test("Subtracting two positive numbers", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  test("Subtracting two negative numbers", () => {
    expect(calculator.subtract(-5, -3)).toBe(-2);
  });

  test("Subtracting zero from a number", () => {
    expect(calculator.subtract(5, 0)).toBe(5);
  });
});

describe("Calculator - divide method", () => {
  const calculator = new Calculator();

  test("Dividing two positive numbers", () => {
    expect(calculator.divide(6, 3)).toBe(2);
  });

  test("Dividing a positive number by a negative number", () => {
    expect(calculator.divide(6, -3)).toBe(-2);
  });

  test("Dividing by zero throws error", () => {
    expect(() => calculator.divide(6, 0)).toThrow("Cannot divide by zero");
  });
});

describe("Calculator - multiply method", () => {
  const calculator = new Calculator();

  test("Multiplying two positive numbers", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });

  test("Multiplying two negative numbers", () => {
    expect(calculator.multiply(-2, -3)).toBe(6);
  });

  test("Multiplying zero with a number", () => {
    expect(calculator.multiply(5, 0)).toBe(0);
  });
});
