
// -----search part-----

let inputSrchEl = document.querySelector(".inputSrch");
let recentInput = [];
let formInputEl = document.getElementById("inputForm");
const listRecentEl = document.querySelector(".recentList");
let buttonEl = document.querySelector("button");
let listOfrecentHTML = "";



inputSrchEl.addEventListener("keydown", ()=>{
    // console.log(inputSrchEl);
    if(inputSrchEl.value){
        document.getElementById("closeSearch").style.display = "block"
    }
    else {
        document.getElementById("closeSearch").style.display = "none"
    }
})

formInputEl.addEventListener("submit", (e)=>{
    e.preventDefault();
    recentInput.unshift(inputSrchEl.value)
    console.log(recentInput);
    
})

buttonEl.addEventListener("click", ()=>{
    console.log(inputSrchEl.value);
});



