let item = [
  {id: 1,img: "./img/watch-1.webp",name: "Royal SV-7438 2.0",price: 150,count: 1,rating: "&#x2605&#9733&#9733&#9733",avaliable: 45,},
  {id: 2,img: "./img/watch-2.webp",name: "john Wick SV-7475-F...",price: 120,count: 1,rating: "&#x2605&#9733",avaliable: 1,},
  {id: 3,img: "./img/watch-3.webp",name: "Monterrey SV-8262-M",price: 200,rating: "&#x2605&#9733&#9733",count: 1,avaliable: 13,},
  {id: 4,img: "./img/watch-4.webp",name: "MODICCI",price: 100,rating: "&#x2605",count: 1,avaliable: 4,},
  {id: 5,img: "./img/watch-5.webp",name: "Aurum SV-9371-M",price: 300,rating: "&#x2605&#9733",count: 1,avaliable: 15,},
  {id: 6,img: "./img/watch-6.webp",name: "RASCALJACK SV-9299 ...",price: 455,rating: "&#x2605&#9733&#9733",count: 1,avaliable: 0,},
  {id: 7,img: "./img/watch-7.webp",name: "Bloom SV-7502-M",price: 350,rating: "&#x2605&#9733",count: 1,avaliable: 25,},
  {id: 8,img: "./img/watch-8.webp",name: "Boomston SV-9778-M",price: 250,rating: "&#x2605&#9733&#9733",count: 1,avaliable: 45,},
  {id: 9,img: "./img/watch-9.webp",name: "Aurum SV-9371-M", price: 250,rating: "&#x2605&#9733&#9733&#9733&#9733",count: 1,avaliable: 45,},
  {id: 10,img: "./img/watch-10.jpg",name: "Sophina SV-8273-M",price: 250,rating: "&#x2605&#9733&#9733&#9733&#9733",count: 1,avaliable: 45,}, {id: 11,img: "./img/watch-11.jpg",name: "Sophina SV-8273-M",price: 250,rating: "&#x2605&#9733&#9733&#9733&#9733",count: 1,avaliable: 45,}, {id: 12,img: "./img/watch-12.jpg",name: "Sophina SV-8273-M",price: 250,rating: "&#x2605&#9733&#9733&#9733&#9733",count: 1,avaliable: 45,},
  {id: 13,img: "./img/watch-13.jpg",name: "Sophina SV-8273-M",price: 250,rating: "&#x2605&#9733&#9733&#9733&#9733",count: 1, avaliable: 45,}, {id: 14,img: "./img/watch-14.jpg",name: "Sophina SV-8273-M",price: 250,rating: "&#x2605&#9733&#9733&#9733&#9733",count: 1,avaliable: 45,}, {id: 15,img: "./img/watch-15.jpg",name: "Sophina SV-8273-M",price: 250,rating: "&#x2605&#9733&#9733&#9733&#9733",count: 1,avaliable: 45,},
  {id: 16,img: "./img/watch-16.jpg",name: "Sophina SV-8273-M",price: 250,rating: "&#x2605&#9733&#9733&#9733&#9733",count: 1,avaliable: 45,},
  {id: 17,img: "./img/watch-17.webp",name: "Sophina SV-8273-M",price: 250,rating: "&#x2605&#9733&#9733&#9733&#9733",count: 1,avaliable: 45,},
  {id: 18,img: "https://cdn.shopify.com/s/files/1/0003/5815/4293/files/15.jpg?v=1740386562  ",name: "Sophina SV-8273-M",price: 250,rating: "&#x2605&#9733&#9733&#9733&#9733",count: 1,avaliable: 45,},
];

let list = document.querySelector(".list");
let products = item.map((key, indx) => {
  return `<div class="card">
                  <div class="pic"  onclick="showdetail(${indx})" >
                      <img src="${key.img}" id="imgs">
                  </div>
                  <p class="name">${key.name} </p>
                  <p class="price">${key.price} <small>$</small></p>
                  <button onclick="addtoCart(${indx})" class="buything">Add to Cart</button>
              </div>`;
});
list.innerHTML = products;
let info = document.querySelector(".info-div");
let icon = document.querySelector(".icon");
let div = document.querySelector(".div");
let imge = document.querySelector(".imge");
let close = document.querySelector(".close");
let count = document.querySelector(".count");
let pics = document.querySelectorAll(".pic");
let pics_det = document.querySelectorAll(".pics");
let detail = document.querySelector(".detail");
let heading = document.querySelector(".heading");
let countdisp = document.querySelector(".countdisp");
let totalPrice = document.querySelector(".total");
let side_list = document.querySelector(".buy-list");
let innerlist = document.querySelector(".inner-list");
let close_details = document.querySelector(".close_details");
let storeitem = JSON.parse(localStorage.getItem("carts")) || [];
let productCount = 0; 
console.log(countdisp);

div.addEventListener("mousemove", (e) => {
  div.style.backgroundPosition = -e.offsetX + "px " + -e.offsetY + "px";
  // console.log(div);
});
let array = [
  "./img/watch-3.webp",
  "./img/watch-4.webp",
  "./img/watch-5.webp",
  "./img/watch-6.webp",
  "./img/watch-7.webp",
];

function increment() {
  productCount++
countdisp.innerHTML = productCount
}
function decrement() {
  productCount--
  countdisp.innerHTML = productCount
}
icon.addEventListener("click", (event) => {
  event.stopPropagation();
  side_list.classList.toggle("open");
});

close.addEventListener("click", (event) => {
  side_list.classList.remove("open");
});
function showdetail(product,pa) {
  detail.style.display = "block";
  heading.innerHTML = "ABOUT PRODUCT";
  let det = item[product];
  console.log(item[product])
    console.log(storeitem);
  div.style.backgroundImage = `url('${det.img}')`;
  imge.src = det.img;
  console.log(count);
  
  info.innerHTML = `
  <p id="name1" >${det.name}</p>
  <p class="rating">${det.rating}</p>
  <p class="rating" >Brand : ROYAL</p>
  <p class="rate" >Price : ${det.price}$</p>
  <p id="name1" >Avaliable : ${det.avaliable}</p>
  <div class=" quantity1 ">
  <button onclick="decrement()"><i class="fa-solid fa-minus"></i></button>
  <button onclick="increment()"><i class="fa-solid fa-plus"></i></button>
  </div>
  <button onclick="addtoCart1(${product})" class="buything buything1">Add to Cart</button>
  `;

  pics_det.forEach((pic, ind) => {
    pic.addEventListener("click", () => {
      imge.src = array[ind];
    });
  });
}
function addtoCart1(id) {
  if (!storeitem[id]) {
    storeitem[id] = item[id];
    storeitem[id].count = productCount
  } else {
      storeitem[id].count += productCount
  }
  localStorage.setItem("carts", JSON.stringify(storeitem));
  reload();
}
function addtoCart(id) {
  if (!storeitem[id]) {
    storeitem[id] = item[id];
  } else {
    storeitem[id].count += 1;
  }
  localStorage.setItem("carts", JSON.stringify(storeitem));
  reload();
}
// console.log(count);
function reload() {
  innerlist.innerHTML = "";
  let price = 0;
  let total_price = 0;

  storeitem.forEach((cart, keys) => {
    if (cart) {
      price += cart.count;
      total_price += cart.price * cart.count;
      let new_items = document.createElement("div");
      new_items.innerHTML = `<div class="items">
              <div class="img"><img src="${cart.img}" alt=""></div>
              <div class="p">${cart.name} </div>
              <div class="rs">${cart.price}$ </div>
              <span class="span" >${" =" + cart.count * cart.price + "$"}</span>
              <div class="quantity">
                  <button onclick="decr(${keys})"><i class="fa-solid fa-minus"></i></button>
                  <span>${cart.count}</span>
                  <button onclick="incr(${keys})"><i class="fa-solid fa-plus"></i></button>
                  <button onclick="remove(${keys})"><i class="fa-solid fa-trash-can"></i></button>
              </div>
          </div>`;
      innerlist.append(new_items);
      totalPrice.innerHTML = "Total " + total_price + "$";
    }
  });
  count.innerHTML = price;
}
function incr(id) {
  if (storeitem[id]) {
    storeitem[id].count += 1;
  }
  reload(); 
  localStorage.setItem("carts", JSON.stringify(storeitem));
}
function decr(id) {
  if (storeitem[id] && storeitem[id].count > 1) {
    storeitem[id].count -= 1;
  }
  reload();
  localStorage.setItem("carts", JSON.stringify(storeitem));
}
function remove(id) {
  delete storeitem[id];
  if ( storeitem.length == 18) {
    totalPrice.innerHTML = "Total 00$"
  }
  reload();
  localStorage.setItem("carts", JSON.stringify(storeitem));
}
close_details.addEventListener("click", () => {
  detail.style.display = "none";
  heading.innerHTML = "PRODUCTS LIST";
});
document.addEventListener("DOMContentLoaded", reload);
