function telephoneCheck(str) {

  let regexp = /(\+?\-?0?[0-9]0?[ -]?)?(\(?\d{3}\)?)[ -]?(\d{3})[ -]?(\d{4}\d?)/;
  let result = str.match(regexp);

  if (result) {
    if (result[1]) {
      console.log('result 1 = ' + result[1])
      if (!result[1].match(/\+?1/) || result[1].match(/\-/) || result[1].match(/1?0/)  ) { return false }
    }

    if (result[4].length > 4) { return false }

    if (result[2].includes('(') || result[2].includes(')')) {
      return result[2].includes('(') && result[2].includes(')') ? true : false;
    }
    return true
  }

  return false
}

/* 

telephoneCheck("555-555-5555") should return a boolean.
Passed
telephoneCheck("1 555-555-5555") should return true.
Passed
telephoneCheck("1 (555) 555-5555") should return true.
Passed
telephoneCheck("5555555555") should return true.
Passed
telephoneCheck("555-555-5555") should return true.
Passed
telephoneCheck("(555)555-5555") should return true.
Passed
telephoneCheck("1(555)555-5555") should return true.
Passed
telephoneCheck("555-5555") should return false.
Passed
telephoneCheck("5555555") should return false.
Passed
telephoneCheck("1 555)555-5555") should return false.
Passed
telephoneCheck("1 555 555 5555") should return true.
Passed
telephoneCheck("1 456 789 4444") should return true.
Passed
telephoneCheck("123**&!!asdf#") should return false.
Passed
telephoneCheck("55555555") should return false.
Passed
telephoneCheck("(6054756961)") should return false
Passed
telephoneCheck("2 (757) 622-7382") should return false.
Passed
telephoneCheck("0 (757) 622-7382") should return false.
Passed
telephoneCheck("-1 (757) 622-7382") should return false
Passed
telephoneCheck("2 757 622-7382") should return false.
Passed
telephoneCheck("10 (757) 622-7382") should return false.
Passed
telephoneCheck("27576227382") should return false.
Passed
telephoneCheck("(275)76227382") should return false.
Passed
telephoneCheck("2(757)6227382") should return false.
Passed
telephoneCheck("2(757)622-7382") should return false.
Passed
telephoneCheck("555)-555-5555") should return false.
Passed
telephoneCheck("(555-555-5555") should return false.
Passed
telephoneCheck("(555)5(55?)-5555") should return false.
Passed

*/
