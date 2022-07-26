$.get("/randomWord")
  .then(function (word) {
    console.log(`The books that have a title of ${word} are: `);
    return $.get(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`
    );
  })
  .then(function (result) {
    let books = result.items;
    books.map((b) => {
      console.log(b.volumeInfo.title);
    });
  });
