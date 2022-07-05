/**
 *  URL 다루기
 */

var url1 = "http://www.mysite.com/user?name=둘리&no=10";

//1. escape
var url2 = escape(url1);
console.log(url2);

//2. encodeURI: parameter만 encoding, 사용(o)
var url3 = encodeURI(url1);
console.log(url3);
// window.location = url3;

//3. encodeURIcomponent
// 잘못 사용한 경우
var url4 = encodeURIComponent(url1);
console.log(url4);

//4.
// 만들어야 할 URL
// http://www.mysite.com/user?no=10&name=둘리&email=cccc1515@naver.com
var url = "http://www.mysite.com/user";
var params = {
    name: "둘리",
    no: 10,
    email: "cccc1515@naver.com"
};

var toQueryString = function(o) {
    var qs = [];
    for(prop in o) {
        qs.push(prop + "=" + o[prop]);
    }
    return qs.join('&');
}

var url5 = url + "?" + toQueryString(params)
console.log(url5);

f = function() {
    console.log("!!!");
}

/**
 * var jQuery = function() {......}
 * var $ = jQuery;
 * 
 * 
 * $.ajax({
 *  url: "",
 *  type: "post",
 *  data: toQueryString(params)
 *  });
 */