import electronic from "./data/electronic.js"
import HomeandKitchen from "./data/Home&kitchen.js"
import mensSec from "./data/men.js"
import WomenWestern from "./data/womenWestern.js"
import WomenEthnic from "./data/womenEthenic.js"



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


// function reusable-----
function renderSubMenu(id,data){
    let temp = document.getElementById(id)

function tempfunction(){
   return data.map(el =>{
    let list = "";
    list =el.data.map(element => `<p>${element}</p>`).join(" ")

    return `
    <div class="column">
        <h4>${el.heading}</h4>
        ${list}
    </div>
    `   
    }).join("")
}
temp.innerHTML = tempfunction()
}

// ----women Ethnic----
renderSubMenu("womenEthnic",WomenEthnic)

// ----women western----
renderSubMenu("womenWestern",WomenWestern)

// ----men----
renderSubMenu("menWear",mensSec)

// ----home and kitchen----
renderSubMenu("homeAndkitchen",HomeandKitchen)

// ----electronics----
renderSubMenu("electronics",electronic)