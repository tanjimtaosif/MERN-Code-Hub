console.log(document);

function getElement(id) {
  const element = document.getElementById(id);
  return element;
}

//delegation

getElement("product-box").addEventListener("click", function (e) {
  if (e.target.className.includes("cart-btn")) {
    // alert("card clicked");
    const cartButton = e.target;
    const productImg =
      cartButton.parentNode.parentNode.children[0].children[0].src;

    const productTitle =
      cartButton.parentNode.parentNode.children[1].children[0].innerText;

    // console.log(productTitle);
    const productPrice =
      cartButton.parentNode.parentNode.children[1].children[2].children[0]
        .innerText;

    const totalPrice = getElement("total-price").innerText;

    const currentTotal = Number(productPrice) + Number(totalPrice);
    getElement("total-price").innerText = currentTotal;

    const cartContainer = getElement("cart-container");

    const newCart = document.createElement("div");
    newCart.innerHTML = `
    <div class="bg-gray-200 rounded-xl flex justify-between p-4">
                  <img src="${productImg}" alt="" class="w-10" />
                  <div class="">
                    <h2 class="font-bold">${productTitle}</h2>
                    <h2 class="">${productPrice} Tk</h2>
                  </div>
            </div>
    `;

    cartContainer.append(newCart);

    const quantity = getElement("total-quantity").innerText;
    console.log(quantity);

    const currentQuantity = Number(quantity) + 1;
    getElement("total-quantity").innerText = currentQuantity;
  }
});

//traverse technique

// const cartbtns = document.getElementsByClassName("cart-btn");
// console.log(cartbtns);

// for (let cartButton of cartbtns) {
//   cartButton.addEventListener("click", function () {
//     const productImg =
//       cartButton.parentNode.parentNode.children[0].children[0].src;

//     const productTitle =
//       cartButton.parentNode.parentNode.children[1].children[0].innerText;

//     // console.log(productTitle);
//     const productPrice =
//       cartButton.parentNode.parentNode.children[1].children[2].children[0]
//         .innerText;

//     const totalPrice = getElement("total-price").innerText;

//     const currentTotal = Number(productPrice) + Number(totalPrice);
//     getElement("total-price").innerText = currentTotal;

//     const cartContainer = getElement("cart-container");

//     const newCart = document.createElement("div");
//     newCart.innerHTML = `
//     <div class="bg-gray-200 rounded-xl flex justify-between p-4">
//                   <img src="${productImg}" alt="" class="w-10" />
//                   <div class="">
//                     <h2 class="font-bold">${productTitle}</h2>
//                     <h2 class="">${productPrice} Tk</h2>
//                   </div>
//             </div>
//     `;

//     cartContainer.append(newCart);

//     const quantity = getElement("total-quantity").innerText;
//     console.log(quantity);

//     const currentQuantity = Number(quantity) + 1;
//     getElement("total-quantity").innerText = currentQuantity;
//   });
// }

document.getElementById("btn-clear").addEventListener("click", function () {
  const cartContainer = getElement("cart-container");
  cartContainer.innerHTML = "";
  getElement("total-quantity").innerText = 0;
  getElement("total-price").innerText = 0;
});

// traditional way
// document.getElementById("cart-btn-1").addEventListener("click", function () {
//   const title = getElement("card-title-1").innerText;

//   const price = getElement("card-price-1").innerText;
//   console.log(title, price);

//   //total price k dhoro
//   const totalPrice = getElement("total-price").innerText;

//   //calculate
//   let currentTotal = Number(price) + Number(totalPrice);

//   //price uptade koro
//   getElement("total-price").innerText = currentTotal.toFixed(2);

//   //cart-container কে ধরো।
//   const cartContainer = getElement("cart-container");

//   // এক টা ডিভ বানাও
//   const newCart = document.createElement("div");
//   newCart.innerHTML = `
//             <div class="bg-gray-200 rounded-xl flex justify-between p-4">
//                   <img src="./assets/kitchen-1.png" alt="" class="w-10" />
//                   <div class="">
//                     <h2 class="font-bold">${title}</h2>
//                     <h2 class="">${price} Tk</h2>
//                   </div>
//             </div>

// `;

//   //cart-container এ যোগ করতে হবে
//   cartContainer.append(newCart);
// });

//event ad korar system

// //যেখানে ক্লিক হবে সেটাকে ধরে নিয়ে আসো। ✅
// //ইভেন্ট এড করো।
// //ফাংশন লেখো

// document
//   .getElementById("cart-btn-steel")
//   .addEventListener("dblclick", function () {
//     console.log("স্টিলের হাড়ি clicked");
//   });

// id -> element
// className -> array of element
// tagName -> array of element
// querySelector -> element
//querySelectorAll -> array of element
// function removeSpace(str) {
//   return str.replaceAll(" ", "").toUpperCase();
// }

// const titles = document.querySelectorAll(".card-title");
// console.log(titles);

// for (let title of titles) {
//   //   title.innerText="";
//   // title.innerHTML="";
//   //   title.style.border = "3px solid red";
//   //   title.classList.remove("card-title");
// }

// const images = document.getElementsByTagName("img");
// console.log(images);

// for (let img of images) {
//   img.addEventListener("mouseenter", function () {
//     img.src =
//       "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTFnsSznrWYvLEwyUDCWYTlO6dE63SaLMsrspsfMysP5y0h2Os_JVCr8qk3dX0RVXI2kz3tDMGx6Fz_gLqp_TiIsneTGp0Xqi45s5LPA8wZ";
//   });
// }
