// Easy
const averageNum = (array) => array.reduce((a, b) => a + b) / array.length;
console.log(averageNum([1, 4, 7]));

// Medium
let num = [4, 5, 6, 7, 0, 1, 2];

let target = (arr, targetNum) => {
    console.log(arr.indexOf(targetNum));
}

target(num, 0);
target(num, 3);

//Hard
let changeColor = (color) => {
    document.body.style.background = color;
}
let red = () => {
    changeColor('red');
}
let white = () => {
    changeColor('white');
}

// Very Hard
var coinChange = function(coins, amount) {
    const table = new Array(amount + 1).fill(Infinity);
    table[0] = 0;

    for(let coin of coins) {
        for(let i = 0; i < table.length; i++) {
            if(coin <= i) {
                let idx = i - coin;
                let potentialAmt = table[idx] + 1;
                table[i] = Math.min(potentialAmt, table[i]);
            }
        }
    }
    return table[table.length - 1] === Infinity ? -1 : table[table.length - 1];
};

console.log(coinChange([1,2,5], 11));