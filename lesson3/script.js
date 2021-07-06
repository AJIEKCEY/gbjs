/**
 * isPrime
 *
 * @param {number} n - number to check
 * @return {boolean} - is prime
 * */
function isPrime(n) {
    if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
    if (n % 2 == 0) return (n == 2);
    if (n % 3 == 0) return (n == 3);
    var m = Math.sqrt(n);
    for (var i = 5; i <= m; i += 6) {
        if (n % i == 0) return false;
        if (n % (i + 2) == 0) return false;
    }
    return true;
}

/**
 *
 * @param { array } basket - goods
 * @return { number } - total price
 */
function countBasketPrice(basket){
    return basket.reduce((total,item) => total + item.price, 0);
}

/**
 *
 * @param { number } rows
 */
function drawPyramid(rows){
    let row = 'x'
    for (let i = 1; i <= rows; i++) {
        console.log(row);
        row += 'x';
    }
}


// Задание 1
let counter = 0;
while (counter < 100){
    if (isPrime(counter))
        console.log(counter);
    counter++
}

// Задание 3
let basket = [
    {
        name: 'Товар 1',
        price: 34
    },
    {
        name: 'Товар 2',
        price: 34
    },{
        name: 'Товар 3',
        price: 34
    },
    {
        name: 'Товар 4',
        price: 34
    },
    {
        name: 'Товар 5',
        price: 34
    },
    {
        name: 'Товар 6',
        price: 34
    },
];

console.log(countBasketPrice(basket));

// Задание 3
for (let i = 0;i <= 9; console.log(i++)){};

// Задание 4
drawPyramid(20);