const CONTENT_CONTAINER = document.getElementById("content-container");
const ABOUT_BTN = document.getElementById("about");
const PRODUCTS_BTN = document.getElementById("products");
const CART_BTN = document.getElementById("cart");

ABOUT_BTN.addEventListener("click", function () {
  CONTENT_CONTAINER.innerHTML = "";
  const ABOUT_SECTION = document.createElement("div");
  ABOUT_SECTION.setAttribute("class", "about-section");
  const ABOUT_HEADER = document.createElement("h2");
  const ABOUT_CONTENT = document.createElement("div");
  ABOUT_CONTENT.setAttribute("class", "about-us-content");
  ABOUT_HEADER.innerText = "About Us";
  const ABOUT_PARAGHRAPH = document.createElement("p");
  ABOUT_PARAGHRAPH.innerText = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                 Ab ipsum natus vitae quaerat obcaecati ex numquam placeat 
                                 harum rem architecto impedit fugiat nobis molestias iure esse,
                                 ducimus adipisci voluptas at.
                                `;
  const ABOUT_IMG = document.createElement("img");

  ABOUT_IMG.setAttribute("src", "imgs/Electronic Online Header-01.webp");
  ABOUT_IMG.setAttribute("height", "300px");

  ABOUT_CONTENT.appendChild(ABOUT_PARAGHRAPH);
  ABOUT_CONTENT.appendChild(ABOUT_IMG);
  ABOUT_SECTION.appendChild(ABOUT_HEADER);
  ABOUT_SECTION.appendChild(ABOUT_CONTENT);
  CONTENT_CONTAINER.append(ABOUT_SECTION);
});

PRODUCTS_BTN.addEventListener("click", function () {
  CONTENT_CONTAINER.innerHTML = "";
  const PRODUCTS_SECTION = document.createElement("div");
  PRODUCTS_SECTION.setAttribute("class", "products-section");
  const PRODUCTS_HEADER = document.createElement("h2");
  PRODUCTS_HEADER.innerText = "All Products";
  const PRODUCTS_CONTENT = document.createElement("div");
  PRODUCTS_CONTENT.setAttribute("class", "products-content");
  for (let product of products) {
    const PRODUCT_ELEMENT = document.createElement("div");
    PRODUCT_ELEMENT.setAttribute("class", "product-element");
    const PRODUCT_IMG = document.createElement("img");
    const PRODUCT_INFO = document.createElement("div");
    PRODUCT_INFO.setAttribute("class", "product-info");
    const PRODUCT_ADD_TO_CART = document.createElement("a");
    const CART_ICON = document.createElement("i");
    CART_ICON.setAttribute("class", "fas fa-cart-arrow-down");
    PRODUCT_ADD_TO_CART.appendChild(CART_ICON);
    PRODUCT_ADD_TO_CART.setAttribute("href", "#");
    PRODUCT_IMG.setAttribute("width", "100%");
    PRODUCT_IMG.setAttribute("height", "70%");
    const PRODUCT_NAME = document.createElement("h3");
    const PRODUCT_PRICE = document.createElement("p");
    PRODUCT_IMG.setAttribute("src", product.image);
    PRODUCT_NAME.innerText = product.name;
    PRODUCT_PRICE.innerText = "$" + product.price;
    PRODUCT_ELEMENT.appendChild(PRODUCT_IMG);
    PRODUCT_INFO.appendChild(PRODUCT_NAME);
    PRODUCT_INFO.appendChild(PRODUCT_PRICE);
    PRODUCT_INFO.appendChild(PRODUCT_ADD_TO_CART);
    PRODUCT_ELEMENT.appendChild(PRODUCT_INFO);
    PRODUCTS_CONTENT.appendChild(PRODUCT_ELEMENT);
  }

  PRODUCTS_SECTION.appendChild(PRODUCTS_HEADER);
  PRODUCTS_SECTION.appendChild(PRODUCTS_CONTENT);
  CONTENT_CONTAINER.append(PRODUCTS_SECTION);
});

CART_BTN.addEventListener("click", function () {
  CONTENT_CONTAINER.innerHTML = "";
  const CART_SECTION = document.createElement("div");
  CART_SECTION.setAttribute("class", "products-section");
  const CART_HEADER = document.createElement("h2");
  CART_HEADER.innerText = "All Products";
  const CART_CONTENT = document.createElement("div");
  CART_CONTENT.setAttribute("class", "products-content");
  if (cart.length === 0) {
    CART_CONTENT.innerText = "No Products Added Yet";
  } else {
    for (let product of cart) {
      const PRODUCT_ELEMENT = document.createElement("div");
      PRODUCT_ELEMENT.setAttribute("class", "product-element");
      const PRODUCT_IMG = document.createElement("img");
      const PRODUCT_INFO = document.createElement("div");
      PRODUCT_INFO.setAttribute("class", "product-info");
      const DELETE_FROM_CART = document.createElement("a");

      DELETE_FROM_CART.innerHTML = "X";
      DELETE_FROM_CART.setAttribute("href", "#");
      PRODUCT_IMG.setAttribute("width", "100%");
      PRODUCT_IMG.setAttribute("height", "70%");
      const PRODUCT_NAME = document.createElement("h3");
      const PRODUCT_PRICE = document.createElement("p");
      PRODUCT_IMG.setAttribute("src", product.image);
      PRODUCT_NAME.innerText = product.name;
      PRODUCT_PRICE.innerText = "$" + product.price;
      PRODUCT_ELEMENT.appendChild(PRODUCT_IMG);
      PRODUCT_INFO.appendChild(PRODUCT_NAME);
      PRODUCT_INFO.appendChild(PRODUCT_PRICE);
      PRODUCT_INFO.appendChild(DELETE_FROM_CART);
      PRODUCT_ELEMENT.appendChild(PRODUCT_INFO);
      CART_CONTENT.appendChild(PRODUCT_ELEMENT);
    }
  }

  CART_SECTION.appendChild(CART_HEADER);
  CART_SECTION.appendChild(CART_CONTENT);
  CONTENT_CONTAINER.append(CART_SECTION);
});
