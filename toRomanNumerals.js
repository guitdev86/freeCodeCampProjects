function convertToRoman(num) {
  let romanUnderTen = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
  let romanDec = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  let romanHundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  let romanThousands = ['', 'M', 'MM', 'MMM']

  if (num <= 10) {
    return romanUnderTen[num];
  }

  else if (10 < num && num < 100) {
    let decOrder = Math.floor(num / 10);
    let leftover = num % 10;
    return romanDec[decOrder] + romanUnderTen[leftover]
  }

  else if (100 <= num && num < 1000) {
    let hundredOrder = Math.floor(num / 100);
    let decOrder = Math.floor(Math.floor(num / 10) % 10)
    let leftover = num % 10;
    return romanHundreds[hundredOrder] + romanDec[decOrder] + romanUnderTen[leftover]
  }

  else if (1000 <= num && num < 4000) {
    let thousands = Math.floor(num / 1000)
    let hundredOrder = Math.floor(Math.floor(num / 100) % 10)
    let decOrder = Math.floor(Math.floor(num / 10) % 10)
    let leftover = num % 10;
    return romanThousands[thousands] + romanHundreds[hundredOrder] + romanDec[decOrder] + romanUnderTen[leftover]
  }
}
