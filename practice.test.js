function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1,);
}

test("capitalize the first letter of a string", () => {
    expect(capitalize("hello")).toBe("Hello");
})

function reverseString(string) {
    return string.split('').reverse().join('');
}

test("reverse string", () => {
    expect(reverseString("Hi")).toBe("iH");
})


const calculator = {
    add: (a, b) => {
        return a + b;
    },
    subtract: (a, b) => {
        return a - b;
    },
    multiply: (a, b) => {
        return a * b;
    },
    divide: (a, b) => {
        return a / b;
    }

}

test("calculator", () => {
    expect(calculator.add(1, 1)).toBe(2);
    expect(calculator.subtract(2, 1)).toBe(1);
    expect(calculator.multiply(2, 1)).toBe(2);
    expect(calculator.divide(2, 1)).toBe(2);
})

function isPunctuation(char) {
    return /[\p{P}]/u.test(char);
}

function shiftChar(char, alphabet, factor) {
    let index = alphabet.indexOf(char);
    if (index !== -1) {
        let newIndex = (index + factor) % 26;
        return alphabet[newIndex];
    }
    return char;
}

function caesarCipher(string, factor) {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let crypted = '';
    for (let char of string) {
        if (lowercase.includes(char)) {
            crypted += shiftChar(char, lowercase, factor);
        } else if (uppercase.includes(char)) {
            crypted += shiftChar(char, uppercase, factor);
        } else if (isPunctuation(char) || char === " ") {
            crypted += char;
        } else {
            crypted += char;
        }
    }

    return crypted;
}


test("takes a string and a shift factor and returns it with each character “shifted", () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})


function analyzeArray(array) {
    const length = array.length;
    let sum = 0;
    for (let num of array) {
        sum += num;
    }
    const average = sum / length;

    const min = array.reduce((accu, current) => {
        let smallest = accu;
        if (accu > current) {
            smallest = current;
        }
        return smallest;
    })

    const max = array.reduce((accu, current) => {
        let biggest = accu;
        if (accu < current) {
            biggest = current;
        }
        return biggest;
    })

    return {
        average,
        min,
        max,
        length
    }
}

test("takes an array of numbers and returns an object with the following properties: average, min, max, and length.", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
})