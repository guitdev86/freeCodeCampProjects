const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(array) {
    this.array = array
    this.playerLocation = [0, 0]
    this.gameOn = true
  }

  handleInput() {
    this.array.map(line => console.log(line.join('')))
    return prompt('Which way?')
  }

  isWinning() {
    if (this.playerLocation[0] < 0 || this.playerLocation[1] < 0 || this.playerLocation[1] >= this.array[0].length || this.playerLocation[0] >= this.array.length) {
      console.log("You're out of the board!");
      return this.gameOn = false;
    }

    if (this.array[this.playerLocation[0]][this.playerLocation[1]] === 'O') {
      console.log("Sorry, you fell down the hole!");
      return this.gameOn = false;
    }

    if (this.array[this.playerLocation[0]][this.playerLocation[1]] === '^') {
      console.log("You have found your hat!");
      return this.gameOn = false;
    }

    this.array[this.playerLocation[0]][this.playerLocation[1]] = '*'
  }

  gameLoop() {
    while (this.gameOn) {
      let direction = this.handleInput();
      switch (direction.toLowerCase()) {
        case 'd':
          this.playerLocation[0] += 1;
          break;
        case 'u':
          this.playerLocation[0] -= 1;
          break;
        case 'l':
          this.playerLocation[1] -= 1;
          break;
        case 'r':
          this.playerLocation[1] += 1;
          break;
      }
      this.isWinning();
      if (direction.toLowerCase() === 'q') {
        this.gameOn = false;
      }
    }
  }
}

let generateField = () => {
  let length = Math.floor(Math.random() * 10)
  let height = Math.floor(Math.random() * 10)
  let result = [];

  for (let m = 0; m <= height; m++) {
    let lengthArray = []
    for (let i = 0; i <= length; i++) {
      switch (Math.floor(Math.random() * 4)) {
        case 0:
          lengthArray.push(hole);
          break;
        case 1:
          lengthArray.push(fieldCharacter);
          break;
        case 2:
          lengthArray.push(fieldCharacter);
          break;
        case 3:
          lengthArray.push(fieldCharacter);
          break;
      }
    }
    result.push(lengthArray)
  }


  result[Math.floor(Math.random() * height)][Math.floor(Math.random() * length)] = hat

  if (result[0][0] === hat) {
    result[Math.floor(Math.random() * height)][Math.floor(Math.random() * length)] = hat
  }

  result[0][0] = pathCharacter
  return result
}

const myField = new Field(generateField());

myField.gameLoop()
