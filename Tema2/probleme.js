console.log('Problema 1');
function oddNumber(number) {
    return (number % 2 === 0) ? number - 2 : number * 2;
}

console.log(oddNumber(3)); // expected 6
console.log(oddNumber(4)); // expected 2


console.log('Problema 2');
function checkPrimeNumber(number) {
    if (number <= 1)
        return false;

    for (let i = 2; i < number; i++) {
        if (number % i == 0)
            return false;
    }

    return true;
}

function savePrimes(arr) {
    let primesNumbers = [];

    arr.forEach(element => {
        if (checkPrimeNumber(element))
            primesNumbers.push(element);
    })
    return primesNumbers;
}

console.log(savePrimes([1, 2, 3, 4, 5, 6, 7, 8, 9])) // expected [2, 3, 5, 7]

console.log('Problema 3');
function saveStrings(arr) {
    let result = [];
    arr.forEach(element => {
        if (typeof (element) === 'string')
            result.push(element);
    })
    return result;
}

console.log(saveStrings([1, '1', 'salut', 2, 6, true, 'true'])); // expected ['1', 'salut', 'true']
console.log(saveStrings([1, 2, 3, 4])); // expected []
console.log(saveStrings(['1', '2', '3', '4'])); // expected ['1', '2', '3', '4']

console.log('Problema 4');
function addDigits(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        if (number[i] % 2 != 0) {
            sum = sum + parseInt(number[i]);
            continue;
        }
    }
    return sum;
}

console.log(addDigits('1523')); // expected 9

console.log('Problema 5');
switch (new Date().getDay()) {
    case 2:
        console.log('The weekend is near.');
        break;
    case 3:
        console.log('You are in the middle of the week.');
        break;
    case 4:
        console.log('The weekend is approaching.');
        break;
    case 5:
        console.log('Get ready for the weekend!');
        break;
    case 0:
    case 6:
        console.log('It is Weekend!!');
        break;
    default:
        console.log('The weekend is far far away');
}