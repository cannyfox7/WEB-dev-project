var bulb = document.querySelector("#bulb")
var btn = document.querySelector("button")


count=0

btn.addEventListener("click", function(){
    if(count==0){
    bulb.style.backgroundColor = "red"
    count=1
    btn.innerHTML="green"
    }else{ bulb.style.backgroundColor = "green"
    count=0
    btn.innerHTML="Red"
    }
})