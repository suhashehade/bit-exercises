const fetch = function (isbn) {
  $.ajax({
    method: "GET",
    url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
    success: function (data) {
      console.log(isbn + " - " + data.items[0].volumeInfo.title);
    },
    error: function (xhr, text, error) {
      alert("there is an issue");
    },
  });
};

fetch(9780575087057);
fetch(9782806269171);
fetch(9781945048470);
fetch(9780307417138);
