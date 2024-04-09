let maleShoe1 = {
  image: "images/MS001.jpg",
  shoeName: "Brogues",
  price: 1000,
  itemCode: "MS001",
};

let femaleShoe1 = {
  image: "images/FS001.jpg",
  shoeName: "Heels",
  price: 600,
  itemCode: "FS001",
};

document.getElementById("itemImageMale").src = maleShoe1.image;
document.getElementById("itemNameMale").innerHTML = maleShoe1.shoeName;
document.getElementById("itemPriceMale").innerHTML = maleShoe1.price;
document.getElementById("itemCodeMale").innerHTML = maleShoe1.itemCode;

document.getElementById("itemImageFemale").src = femaleShoe1.image;
document.getElementById("itemNameFemale").innerHTML = femaleShoe1.shoeName;
document.getElementById("itemPriceFemale").innerHTML = femaleShoe1.price;
document.getElementById("itemCodeFemale").innerHTML = femaleShoe1.itemCode;

document.getElementById("itemSelectMale").addEventListener("click", () => {
  let url = "/selectItem.html?itemCode=" + maleShoe1.itemCode;
  window.open(url, "_blank");
});

document.getElementById("itemSelectFemale").addEventListener("click", () => {
  let url = "/selectItem.html?itemCode=" + femaleShoe1.itemCode;
  window.open(url, "_blank");
});