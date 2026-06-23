var h = document.getElementById("main")
console.log(h);
console.log(h. innerHTML); //Ptint element
h.innerHTML="Good Job "; // update the content of element
console.log(h.innerHTML);  //print content of element

var p1 = document.getElementsByTagName("p"); //Accesing all para tags
console.log(p1.length); // total mumber of para elements
console.log(p1[0].innerHTML); //printing content of first para element

for(let i=0;i<p1.length;i++)
{
    console.log(p1[i].innerHTML)
    p1[i].innerHTML="my coustom Paragraph"+i
}

var list = document.getElementsByClassName("second"); //Acess element by class name
console.log(list[0].innerHTML); //Printing value of first element for that class

var x = document.getElementsByName("student_name");
console.log

// document.getElementById
// document.getElementsByTagName
// document.getElementsByClassName
// document.getElementsByName