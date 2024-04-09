let selectedItem = decodeURIComponent(window.location.search);
console.log(selectedItem);

let selectedItemCode = selectedItem.substring(1);
console.log(selectedItemCode);

if (selectedItemCode === "MS001") {
    document.getElementById("itemImage").src = maleShoe1.image;
    document.getElementById("itemName").innerHTML = maleShoe1.shoeName;
    document.getElementById("itemPrice").innerHTML = maleShoe1.price;
    document.getElementById("itemCode").innerHTML = maleShoe1.itemCode;
}