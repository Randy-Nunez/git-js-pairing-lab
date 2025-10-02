//Code your solutions in this file
const fiveToOneHundred = () => {
    for (let i = 5; i <= 100; i++) {
        console.log(i)
    }
}

const multiplesOfThree = () => {
    for (let i = 3; i <= 100; i += 3) {
        console.log(i)
    }
}


const multiplesOfThreeOrFive = () => {
    for (let i = 3; i <= 100; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            console.log(i)
        }
    }
}

const untilNum = (num) => {
    for (let i = 1; i <= num; i++) {
        console.log(i)
    }
}

const multiply = (num1, num2) => {
    return num1 * num2
}

const add = (num1, num2) => {
    if (num1 != num2) {
        return num1 + num2;
    } else {
        return (num1 + num2) * 3;
    }
}

const isNegative = (num) => {
    if (num < 0) {
        return true;
    } else {
        return false;
    }
}

const triangleArea = (height, base) => {
    return (height * base) / 2;
}

const betweenTwentyAndFourty = (num) => {
    if (num > 20 && num < 40) {
        return true;
    } else {
        return false;
    }
}

const largest = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else if (num3 > num2 && num3 > num1) {
        return num3;
    }
}







































const absoluteNineteen = (num) => {
    let absoluteValue = Math.abs(num - 19);
    if (num < 19) {
        return absoluteValue;
    } else if (num > 19) {
        return absoluteValue * 3;
    }
}

const switchLetters = (string) => {
    let firstCharacter = string[0];
    let lastCharacter = string[string.length - 1];
    let middleString = string.slice(1, -1);

    return lastCharacter + middleString + firstCharacter;
}

const changeString = (string) => {
    let lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
    let upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let newString = "";
    for (let i = 0; i < string.length; i++) {
        if (lowerCaseAlphabet.includes(string[i])) {
            let alphabetIndex = lowerCaseAlphabet.indexOf(string[i]);
            newString += lowerCaseAlphabet[(alphabetIndex + 1) % 26];
        } else if (upperCaseAlphabet.includes(string[i])) {
            let alphabetIndex = upperCaseAlphabet.indexOf(string[i]);
            newString += upperCaseAlphabet[(alphabetIndex + 1) % 26];
        }
    }
    return newString;
}
