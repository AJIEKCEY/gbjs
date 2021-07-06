/**
 * Subtracting.
 * @param {number} a - first operand.
 * @param {number} b - second operand.
 * @return {number}
 */
function subtract (a,b){
    return a - b;
}
/**
 * Adding.
 * @param {number} a - first operand.
 * @param {number} b - second operand.
 * @return {number}
 */
function add (a,b){
    return a + b;
}
/**
 * Dividing.
 * @param {number} a - first operand.
 * @param {number} b - second operand.
 * @return {number}
 */
function divide (a,b){
    return a / b;
}
/**
 * Multiplying.
 * @param {number} a - first operand.
 * @param {number} b - second operand.
 * @return {number}
 */
function multiply (a,b){
    return a * b;
}
/**
 *
 * @param {number} a - first operand.
 * @param {number} b - second operand.
 * @param {string} operation - operation char.
 * @return {number}
 * */
function mathOperation(a, b, operation){
  switch (operation) {
      case '+':
          return add(a,b);
      case '-':
          return subtract(a,b);
      case '/':
          return divide(a,b);
      case '*':
          return multiply(a,b);
      default:
          return 'Введена некорректная операция!';
  }
}
/**
 * Power.
 * @param {number} a - base.
 * @param {number} b - exponent.
 * @return {number}
 */
function power(val, pow){
    if (pow === 1) {
        return val;
    } else {
        return val * power(val, pow - 1);
    }
}
/**
 * Some math operations.
 * @param {number} a - first operand.
 * @param {number} b - second operand.
 * @return {number}
 */
function someOperations(a,b) {
    if ( a >= 0 && b >= 0 )
        return mathOperation(a,b,'-');
    else if (a < 0 && b < 0)
        return mathOperation(a,b,'*');
    else
        return mathOperation(a,b,'+');
}

function monkeyJob (a){
    let stringOfNumbers = '';

    switch (a) {
        case 0:
            stringOfNumbers += '0 ';
        case 1:
            stringOfNumbers += '1 ';
        case 2:
            stringOfNumbers += '2 ';
        case 3:
            stringOfNumbers += '3 ';
        case 4:
            stringOfNumbers += '4 ';
        case 5:
            stringOfNumbers += '5 ';
        case 6:
            stringOfNumbers += '6 ';
        case 7:
            stringOfNumbers += '7 ';
        case 8:
            stringOfNumbers += '8 ';
        case 9:
            stringOfNumbers += '9 ';
        case 10:
            stringOfNumbers += '10 ';
        case 11:
            stringOfNumbers += '11 ';
        case 12:
            stringOfNumbers += '12 ';
        case 13:
            stringOfNumbers += '13 ';
        case 14:
            stringOfNumbers += '14 ';
        case 15:
            stringOfNumbers += '15';
            break;
        default:
            return 'Введите чило от 0 до 15';
    }
    return stringOfNumbers;
}

console.log(power(4,3));

console.log(someOperations(5,6));
console.log(someOperations(-3,-7));
console.log(someOperations(4,-8));

console.log(monkeyJob(5));