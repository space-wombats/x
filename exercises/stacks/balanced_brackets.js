// Problem: https://www.hackerrank.com/challenges/balanced-brackets/problem
function isBalanced(s) {
  let str = s.trim();
  if (!str) {
    return 'NO';
  }
  const isOpenParen = char => char === '{' || char === '(' || char === '[';
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const current = str.charAt(i);
    if (isOpenParen(current)) {
      stack.unshift(current);
    } else {
      if (current === '}' && stack[0] !== '{') {
        return 'NO';
      }
      if (current === ')' && stack[0] !== '(') {
        return 'NO';
      }
      if (current === ']' && stack[0] !== '[') {
        return 'NO';
      }
      stack.shift();
    }
  }
  return stack.length === 0 ? 'YES' : 'NO';
}
