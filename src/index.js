module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const openingBrackets = ['(', '[', '{', '1', '2', '3', '5', '6', '7', '8', '9'];
  const closingBrackets = [')', ']', '}', '1', '2', '3', '5', '6', '7', '8', '9'];

  for (let i = 0; i < str.length; i++) {
    const bracket = str[i];
    if (openingBrackets.includes(bracket)) {
      stack.push(bracket);
    } else if (closingBrackets.includes(bracket)) {
      const lastOpening = stack.pop();
      if (openingBrackets.indexOf(lastOpening) !== closingBrackets.indexOf(bracket)) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
