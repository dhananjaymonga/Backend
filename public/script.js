console.log("hello")
const btns=document.querySelectorAll("button")
console.log(btns)
for( btn of btns){
    btn.addEventListener("click",()=>{
        console.log(1,"click buutem")
    })
}