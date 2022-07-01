/**
 * Date 객체 메소드(Date.prototype.*)
 * 
 */

// 현재 시간
var now = new Date();
console.log(now);

// 2022년 2월22일
var d1 = new Date(2022, 1/* month-1 */, 22);
console.log(d1);

// 2022년 2월22일 22:22:22
var d2 = new Date(2022, 1, 22, 22, 22, 22);
console.log(d2);

// 객체 함수
console.log(
    "년:" + now.getFullYear() + "\n" +
    "월:" + (now.getMonth() + 1) + "\n" +
    "일:" + now.getDate() + "\n" +
    "시:" + now.getHours() + "\n" +
    "분:" + now.getMinutes() + "\n" +
    "초:" + now.getSeconds() + "\n" +
    "밀리초:" + now.getMilliseconds()
);

d2.setFullYear(2024);
console.log(d2);

d2.setMonth(11);  // 0부터 시작이라 11이 12월 
console.log(d2);


//함수를 생성하는 방법4: 익명(anonymous) 함수 : callback
setTimeout(function(){
    console.log('time out:');
}, 1000);

//즉시 실행하는 함수
var s = (function(a,b){
    var m = 10;
    return a/m + b/m;
})(10, 20);
console.log(s);

// 가변 파라미터
var sum = function(){
    // console.log(arguments instanceof Array, arguments.length); //유사 배열
    var sum = 0;
    // for (var i = 0; i < arguments.length; i++){
    //     sum += arguments[i];
    // }
    // Error:
    // Arguments의 __proto__는 Object의 prototype에 chain이 되어 있기 때문에
    // arguments.forEach(function(e){
    //     sum += 0
    // }); 
    
    Array.prototype.forEach.call(arguments,function(e){ //arguments가 this가 됨.
        sum += e;
    })
    return sum;
}

console.log(sum(10));
console.log(sum(10,20));
console.log(sum(10,20,30));
console.log(sum(10,20,30,40,50));