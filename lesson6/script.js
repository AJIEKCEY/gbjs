import  products  from './_data/Products.js'

console.log(products);

console.log(products.getCountBasketPrice());

/**
 * Parse number by position
 *
 * @param {number} n - number
 * @return {object} - parsed number
 * */
function parseNumber(n) {
    const digits = [
        'единицы',
        'десятки',
        'сотни',
        'тысячи',
        'десятки тысяч',
        'сотни тысяч',
        'миллионы',
        'десятки миллионов',
        'сотни миллионов',
        'миллиарды',
        'десятки миллиардов',
        'сотни миллиардов',
        'триллионы',
        'десятки триллионов',
        'сотни триллионов',
        'квадриллионы',
        'десятки квадриллионов',
        'сотни квадриллионов',
        'квинтиллионы',
        'десятки квинтиллионов',
        'сотни квинтиллионов',
        'секстиллионы',
        'десятки секстиллионов',
        'сотни секстиллионов'
    ];
    const lowerBound = 0;
    const upperBound = 99999999999;

    let res = {};

    n = Math.trunc(n);

    if ( n < lowerBound || n > upperBound){
        console.error(`Ошибка входного параметра. Число должно быть от ${ lowerBound } до ${ upperBound }.`);
        return res;
    }

    let stringOfNumber = new String(n);

    for (let i = 0; i < stringOfNumber.length; i++ )
        res[digits[i]] = +stringOfNumber[i];

    return res;
}


console.log(parseNumber(143213548));
