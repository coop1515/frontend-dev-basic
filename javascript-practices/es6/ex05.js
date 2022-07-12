/**
 * Arrow function
 */

const power01 = function(x){
    y = x*x;
    return y;
}

// const f1 = () => {};
// const f2 = function(){}; // 둘 다 같은 것. 표현만 다름. 

const numbers = [1,2,3,4,5];
numbers.forEach(function(n){
    process.stdout.write(`${n}:${power01(n)}\t`);
});

// ex01
console.log("\n--------------------\n");
const power02 = (x) => x * x;

numbers.forEach(function(n){
    process.stdout.write(`${n}:${power02(n)}\t`);
});

// ex02
console.log("\n--------------------\n");
numbers.forEach(function(n){
    process.stdout.write(`${n}:${((x) => x*x)(n)}\t`);  
});

// ex03
console.log("\n--------------------\n");
numbers.forEach(n => process.stdout.write(`${n}:${((x) => x*x)(n)}\t`));

// ex04 : 어휘적 this 바인딩 가능
console.log("\n--------------------\n");
const o = {
    name: '둘리',
    friends: ['또치','마이콜','도우너','길동'],
    printFriends: function(){
        // this.friends.forEach(function(f){
        //     console.log(`${this.name}의 친구 ${f}`);
        // }.bind(this));
        this.friends.forEach((f) => console.log(`${this.name}의 친구 ${f}`));
    }
};

o.printFriends();
