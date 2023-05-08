console.log("Hello world")
let buttons =document.querySelectorAll("button")
let outerDiv=document.querySelector(".close")

buttons.forEach((item)=>{
    item.onclick=() => {
        if(item.id=="closeButton"){
            outerDiv.className="close"
        }
        if (item.id=="openButton") {
            outerDiv.className="pop"
        }
    }
})
