/**
 * const : Block Scope의 상수
 */

// 1. block scope 확인
try{
    if(true){
        const num = 10;
    }
    console.log(num);
} catch(e){
    console.error("[error]" + e);
}

// 2. 대입(Assignment) 에러
try{
    const o = {};
    o.name = '둘리'; // 이건 에러가 아님.

    // o = 10;

    console.log(o);
} catch(e){
    console.error("[error]" + e);
}