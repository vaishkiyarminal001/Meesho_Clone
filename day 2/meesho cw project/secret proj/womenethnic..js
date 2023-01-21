// var arr = [

// {
// image:"https://images.meesho.com/images/products/175747025/5ugld_512.webp",
// Name: "Diwali Dhamaka Festival Special embroidered cotton saree",
// Fabric : "Chanderi Silk",
// price: "500",
// Country : "India"
// },

// {
//     image:"https://images.meesho.com/images/products/169129260/8rv30_512.webp",
// Name: " jecquard saree",
// Fabric : "Chanderi Silk",
// price: "600",
// Country : "India"

// },

// {
//     image:"https://images.meesho.com/images/products/173066841/3pd6j_512.webp",
// Name: " Fancy Jacquard Silk Saree with Embossed Design",
// Fabric : "Chanderi Silk",
// price: "555",
// Country : "India"

// },

// {
//     image:"https://images.meesho.com/images/products/159960277/ooxsj_512.webp",
// Name: " Womans Velvet Embroidered Semi-Stiched Lehenga Choli",
// Fabric : "Velvet",
// price: "770",
// Country : "India"

// },

// {
//     image:"https://www.meesho.com/adrika-petite-kurtis/p/2tmauu",
// Name: " Womans Velvet Embroidered Semi-Stiched Lehenga Choli",
// Fabric : "cotton",
// price: "430",
// Country : "India"

// },

// {
//     image:"https://images.meesho.com/images/products/97668754/lys3m_400.jpg",
// Name: " Petite saree",
// Fabric : "cotton",
// price: "364",
// Country : "India"

// },

// {
//     image:"https://images.meesho.com/images/products/148459120/jrxdh_400.jpg",
// Name: " Trendy Kurti",
// Fabric : "Velvet",
// price: "282",
// Country : "India"

// },

// {
//     image:"https://images.meesho.com/images/products/82957271/cl7hd_400.jpg",
// Name: " Superior Kurtis",
// Fabric : "Velvet",
// price: "262",
// Country : "India"

// },


// {
//     image:"https://images.meesho.com/images/products/79912750/vf6zj_400.jpg",
// Name: " Womans Velvet Embroidered Semi-Stiched Lehenga Choli",
// Fabric : "Velvet",
// price: "771",
// Country : "India"

// },


// {
//     image:"https://images.meesho.com/images/products/91566977/zo3nk_400.jpg",
// Name: " Womans Velvet Embroidered Semi-Stiched Lehenga Choli",
// Fabric : "Velvet",
// price: "528",
// Country : "India"

// },


// {
//     image:"https://images.meesho.com/images/products/173037837/pdgge_400.jpg",
// Name: " Womans Velvet Embroidered Semi-Stiched Lehenga Choli",
// Fabric : "Velvet",
// price: "374",
// Country : "India"

// },


// {
// image:"https://images.meesho.com/images/products/156968880/kg7ir_400.jpg",
// Name: " Womans Velvet Embroidered Semi-Stiched Lehenga Choli",
// Fabric : "Velvet",
// price: "292",
// Country : "India"

// },


// {
//     image:"https://images.meesho.com/images/products/32768758/y5lju_400.jpg",
// Name: " Womans Velvet Embroidered Semi-Stiched Lehenga Choli",
// Fabric : "Velvet",
// price: "222",
// Country : "India"
    
// }, 

// {
//     image:"https://images.meesho.com/images/products/130885223/fpf2p_400.jpg",
// Name: " Sassy Women Shapewear",
// Fabric : "cotton",
// price: "307",
// Country : "India"
    
// },
// ]

// let maind = document.querySelector(".products");

// displaydata(arr)

// function displaydata(arr){

//     arr.forEach(function(ele){

//         let div = document.createElement("div");

//         let image = document.createElement("img")
//         image.setAttribute("src",ele.image );

//         let name = document.createElement("h2");
//         name.textContent = ele.Name;

//         let fab = document.createElement("h4");
//         fab.textContent = ele.Fabric;

//         let price = document.createElement("h4");
//         price.textContent = `₹${ele.price}`;

//         let country = document.createElement("h4");
//         country.textContent = ele.Country;

//         div.append(image,name,fab,price,country);

//         maind.append(div)

//         console.log(ele)


//     })

// }