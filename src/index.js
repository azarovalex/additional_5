module.exports = function check(str, bracketsConfig) {
  let brackArr = str.split('');
	let stack = [];
  stack.push(brackArr[0]);
  
  for (var i = 1; i < brackArr.length; i++) {
    let prevBrack = bracketsConfig.find(function(brackPair) {
      return stack[stack.length - 1] == brackPair[0];
    });
    
    if (prevBrack != undefined)
      prevBrack = prevBrack[1];
    
    if (prevBrack == brackArr[i]) {
      stack.pop();
    } else {
      stack.push(brackArr[i]);
    }
    
  }
  
  return stack.length == 0;
}