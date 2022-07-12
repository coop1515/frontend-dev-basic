/**
 * Template Literal
 */

let no = 10;
let name = '둘리';
let email = 'dooly@gmail.com';

// ex1
console.log("no:10, name: 둘리, email: dooly@gmail.com");
console.log("no:" + no + ", name: " + name + ", email:"+ email);
console.log(`no:${no}, name: ${name}, email: ${email}`);

// ex2
console.log("no:" + no + "\nname: " + name + "\nemail:"+ email);
console.log(`no:${no}
name: ${name}
 email: ${email}`); // 매우 직관적 보이는 그대로 출력이 됨.