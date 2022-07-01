/*
    Array 객체 함수(Array.prototype.*)
*/

var colors = ['black', 'white', 'yellow'];
var fruits = ['apple', 'mango', 'banana'];

// concat
var a1 = fruits.concat(colors);
console.log(a1);

// pop, push: stack 지원 함수
console.log("==========stack==========")
var color = colors.pop();
console.log(color,colors);

colors.push('red');
console.log(colors);

//join
console.log("==== join ======");
var str = fruits.join(":");
console.log(str);

//reverse
console.log("==== reverse ======");
console.log(fruits);
fruits.reverse();
console.log(fruits);
fruits.reverse();

//shift
console.log("==== shift ======");
var numbers = [1000, 2000, 3000, 4000, 8000];
var number = numbers.shift(); // 맨 왼쪽, 첫번째를 꺼냄.
console.log(number, numbers);

// slice
console.log("====slice========")
var numbers = numbers.slice(1, 3); // 1이후부터 3까지 [2,3]
console.log(numbers);

// splice
// index에서 count개를 삭제한 후, 삭제한 요소를 배열로 변환
console.log("===splice(index, count)================")
console.log(fruits);
var fruits2 = fruits.splice(0,2); // 0에서 2 미만[0,1]
console.log(fruits2);

// index에서 count개를 삭제한 후, replace로 대체한 후, 삭제된 요소를 배열로 변환
console.log("===splice(index, count, replace)=========");
var a1 =  [0,1,2,3,4];
var a2 = a1.splice(1,3,10); // 1부터 3개를 삭제하고 그자리에 10을 넣음.
console.log(a2, a1);

// a1.removeAt(1)
console.log("== a1.removeAt(1)=====");
var a1 = [0,1,2,3,4];
a1.splice(2,1);
console.log(a1);

// a1.insertAt(1, 10)
console.log("===a1.insertAt(1)======")
var a1 = [0,1,2,3,4];
a1.splice(1,0,10);
console.log(a1);