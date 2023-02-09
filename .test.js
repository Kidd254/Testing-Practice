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
