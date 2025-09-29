document.addEventListener("DOMContentLoaded", () => {
  const cartLink = document.querySelector(".cart-link");
  const addToCartBtn = document.querySelector(".add-to-cart");

  // Create a counter element beside the cart
  let cartCount = 0;
  const counter = document.createElement("span");
  counter.style.marginLeft = "6px";
  counter.style.fontWeight = "bold";
  counter.textContent = cartCount;
  cartLink.appendChild(counter);

  // Add click event to button
  addToCartBtn.addEventListener("click", () => {
    cartCount++;
    counter.textContent = cartCount;
  });
});
