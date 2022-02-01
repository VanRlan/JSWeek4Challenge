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
// var button = document.getElementById('myButton');

// button.addEventListener('click', function(){
//     if (button.classList.contains('red')) {
//         button.classList.remove('red');
//         button.classList.add('grey');
//     } else {
//         button.classList.remove('grey');
//         button.classList.add('red');
//     }
// });

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
