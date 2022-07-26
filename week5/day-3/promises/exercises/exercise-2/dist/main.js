$.get("/randomWord").then(function (word) {
  let booksPromise = $.get(
    `https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`
  );
  let gifPromise = $.get(
    `https://api.giphy.com/v1/gifs/search?api_key=qkkhGIHY3MIJwTacZwLHHyARz5ZJRmmb&q=intitle:${word}`
  );
  Promise.all([booksPromise, gifPromise]).then(function (results) {
    let books = results[0].items;
    let gifs = results[1].data;

    let booksList = $("#books-list");
    let gifsList = $("#gifs-list");

    books.map((b) => {
      booksList.append(`<li>${b.volumeInfo.title}</li>`);
    });

    gifs.map((g) => {
      gifsList.append(`<li>${g.title}</li>`);
    });
  });
});
