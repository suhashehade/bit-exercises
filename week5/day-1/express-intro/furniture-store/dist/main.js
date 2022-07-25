const getFurniturePrice = function () {
  let itemName = $("#search-price").val();
  $.get(`/priceCheck/${itemName}`, function (response) {
    $("body").append(`<div>${response.price}</div>`);
  });
};

const reduceInventory = function () {
  let itemName = $("#reduce-inventory").val();
  $.get(`/buy/${itemName}`, function (response) {
    $("body").append(
      `<p>Congratulations, you’ve just bought ${itemName} for ${response.price}. There are ${response.inventory} left now in the store.</p>`
    );
  });
};
