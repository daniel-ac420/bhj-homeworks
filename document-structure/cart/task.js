const products = document.querySelectorAll(".product");

let cartProducts = document.querySelector(".cart__products");


for (let product of products) {
	const buttonAddToCart = product.querySelector(".product__add");
	const buttonPlus = product.querySelector(".product__quantity-control_inc");
	const buttonMinus = product.querySelector(".product__quantity-control_dec");
	let productQuantity = product.querySelector(".product__quantity-value");
	
	buttonPlus.addEventListener("click", function() {
		productQuantity.innerHTML++;
	})
	
	buttonMinus.addEventListener("click", function() {
		if (productQuantity.innerHTML > 1) {
			productQuantity.innerHTML--;
		}
	})
	
	buttonAddToCart.addEventListener("click", function() {
		let productCart = document.createElement("div");
		let productDataID = product.getAttribute("data-id");
//		console.log("productDataID = " + productDataID);
		let productImageLink = product.querySelector(".product__image").src;
		productCart.classList.add("cart__product");
		productCart.setAttribute("data-id", productDataID);
		productCart.insertAdjacentHTML("afterBegin", `
			<img class="cart__product-image" src="${productImageLink}">
			<div class="cart__product-count">${productQuantity.innerHTML}</div>
		`);
		
		let currentCartProducts = cartProducts.querySelectorAll(".cart__product");
		
		for (let currentCartProduct of currentCartProducts) {
			let currentCartProductDataID = currentCartProduct.getAttribute("data-id");
//			console.log("currentCartProductDataID = " + currentCartProductDataID);			
			
			if (currentCartProductDataID !== productDataID || currentCartProductDataID === undefined) {
				cartProducts.append(productCart);
			} else {
				let productCartCount = currentCartProduct.querySelector(".cart__product-count");
				productCartCountValue = Number(productCartCount.innerHTML) + Number(productQuantity.innerHTML);
			}
		}
			
//		cartProducts.append(productCart);
	})
}