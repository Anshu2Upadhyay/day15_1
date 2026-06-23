// Query Selector, Selector Single Element-> First Occuring element

var a = document.querySelector("hi"); // Access first hi Tag
console.log(a);

var a = document.querySelector("p"); //Access first p Tag
console.log(a)

var a = document.querySelector("div"); //Access first div Tag
console.log(a)

var a = document.querySelector(".box"); //Access first element with box class
console.log(a)

var b = document.querySelector(".first"); //Access first element with "first" class
console.log(b)

var b = document.querySelector("#first"); //Access first element with "first" id 
console.log(b)

var b = document.querySelector("#main"); //Access first element with "main" id
console.log(b)

var c = document.querySelector("p.first"); //Access first paragaraph tag with first
console.log(c)

var c = document.querySelector("div.box"); //Access first div tag with box class
console.log(c)

var d = document.querySelector(".box.first"); // acces element having class
console.log(d)


var e = document.querySelectorAll("h1");
console.log(e);
console.log("Number of elements : " +e.length);
console.log(e[0]);
console.log(e[0].innerHTML)