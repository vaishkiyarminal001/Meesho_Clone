import electronic from "./data/electronic.js"
import HomeandKitchen from "./data/Home&kitchen.js"
import men from "./data/men.js"
import WomenWestern from "./data/womenWestern.js"
import WomenEthnic from "./data/womenWestern.js"



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

console.log(listRecentEl)

// ----women Ethnic----
let ethnic = document.getElementById("womenEthnic")
function womenEth(){

   return WomenEthnic.map(el =>{
    return `
    <div>
    <h4>${el.heading}</h4>
    ${
        el.data.forEach(element =>{
            console.log(element)
        })
    }
    </div>
    `   
    })
}
ethnic.innerHTML = womenEth()
