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
