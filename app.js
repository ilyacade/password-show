let password = document.querySelector("#password");
let content = password.textContent;
let eyeClose = document.querySelectorAll(".fa")[0];
let eyeShow = document.querySelectorAll(".fa")[1];
eyeClose.addEventListener("click", () =>{
    eyeClose.style.visibility = "hidden"
    eyeShow.style.visibility = "visible";
    show(password)
})
eyeShow.addEventListener("click", () =>{
    eyeShow.style.visibility = "hidden"
    eyeClose.style.visibility = "visible"
    hide(password)
})
function show(type){
    type.setAttribute("type","text")
}
function hide(type){
    type.setAttribute("type","password")
}
