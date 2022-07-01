console.log("===global object======");

globalThis.name = "둘리";
console.log(name, global.name);

global.n = "둘리2";
console.log(n, global.n);

var email = "dooly@gmail.com"; 
// email = "dooly@gmail.com"; // var을 안붙히면 global로 인식.
console.log(email, global.email);

console.log("===function의 객체 메소드 apply=====");
var f1 = function() {
    console.log(this);
}
f1(); // global this가 불러와짐.

// this 바꾸기
var o = {
    n2: '마이콜'

}
f1.apply(o); // 마이콜이 나옴.

console.log("===function의 객체 메소드 call=====");
var f2 = function(s1, s2) {
    console.log(s1 + " " + s2 + " " + this.n2);
}

f2("hi","");
f2.call(o, 'hi', 'again');
f2.apply(o, ['hi', 'again']);