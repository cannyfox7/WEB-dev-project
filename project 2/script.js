var b1 =document.querySelector("#box1")
var b2 =document.querySelector("#box2")
var b3 =document.querySelector("#box3")
var b4 =document.querySelector("#box4")

b1.addEventListener("click", function(){
    var r=Math.floor(Math.random()*100);
    b1.innerHTML=`<h1>${r}</h1>`;

}
)
b2.addEventListener("click", function(){
    var r1=Math.floor(Math.random()*256);
    var r2=Math.floor(Math.random()*256);
    var r3=Math.floor(Math.random()*256);
    b2.style.backgroundColor=`rgb(${r1},${r2},${r3})`;
    
}
)
b3.addEventListener("click", function(){
    namee=["rahul","sachin","saurav","dhoni","virat"]
    var r4=Math.floor(Math.random()*5);
    b3.innerHTML=`<h1>${namee[r4]}</h1>`;
}  
)
b4.addEventListener("click", function(){
    var r5=Math.floor(Math.random()*256);
    var r6=Math.floor(Math.random()*256);
    var r7=Math.floor(Math.random()*256);
    b1.style.backgroundColor=`rgb(${r5},${r6},${r7})`;
    b2.style.backgroundColor=`rgb(${r6},${r7},${r5})`;
    b3.style.backgroundColor=`rgb(${r7},${r5},${r6})`;
    b4.style.backgroundColor=`rgb(${r5},${r7},${r6})`;
}
)