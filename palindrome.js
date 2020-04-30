function palindrome(str) {
  let cleanStringArr = str.toLocaleLowerCase().match(/([A-Z]|[0-9]|[a-z])/g).join('')
  let reversedString = cleanStringArr.split('').reverse().join('');
  return cleanStringArr === reversedString ? true : false
}

console.log(palindrome("race CAR"));
