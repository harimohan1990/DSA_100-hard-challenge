var getSum = function(a, b) {
    while (b !== 0) {
        const carry = a & b;
        a ^= b;
        b = carry << 1;
        if (b === 0 && carry === 0) break;
    }
    return a;
};

const getSumIntegers = getSum(2,3);

console.log(getSumIntegers)