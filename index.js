//Code your solutions in this file
const fiveToOneHundred = () => {
    for (let i = 5; i <= 100; i++){
        console.log(i)
    }
}

const multiplesOfThree = () => {
    for (let i = 3; i <= 100; i += 3){
        console.log(i)
    }
}


const multiplesOfThreeOrFive = () => {
    for (let i = 3; i <= 100; i++){
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