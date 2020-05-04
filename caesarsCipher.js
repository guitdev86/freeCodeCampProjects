function rot13(str) {

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let specCharacters

  let onlyWords = str.match(/([A-Z])\w+/g).join(' ')
  str.match(/([!.?])/g) ? specCharacters = str.match(/([!.?])/g).join('') : specCharacters = ''

  return onlyWords.split(' ').map(
    word => word.split('').map(
      letter => letters.indexOf(letter)).map(
        letter => letter + 13).map(
          letter => letters[letter]).join('')).join(' ').concat(specCharacters)
}

console.log(rot13("SERR PBQR PNZC!"));


//One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

//A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
