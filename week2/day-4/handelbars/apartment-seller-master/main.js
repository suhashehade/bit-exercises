$("button").on("click", function () {
  let address = $("#addr-input").val();
  let minPrice = $("#min-p-input").val();
  let maxPrice = $("#max-p-input").val();
  let minRooms = $("#min-r-input").val();
  let maxRooms = $("#max-r-input").val();
  let immediate = $("#immed-y");
  let parking = $("#park-y");
  let relevantApts = findRelevantApts(
    address,
    minPrice,
    maxPrice,
    minRooms,
    maxRooms,
    immediate,
    parking
  );
  renderApts(relevantApts);
});

const renderApts = function (apartments) {
  $("#results").empty();
  let source = $("#apartments-item").html();
  let template = Handlebars.compile(source);
  let apartmentHtmlItem = template({ apartments });
  $("#results").append(apartmentHtmlItem);
};

renderApts(apartments);
