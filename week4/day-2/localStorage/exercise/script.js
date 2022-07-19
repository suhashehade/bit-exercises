let wisdom = [];
wisdom = JSON.parse(localStorage.getItem("wisdom") || "[]");

const addWisdomPeice = function (text) {
  let wisdomPiece = {
    text: text,
  };

  wisdom.push(wisdomPiece);

  if (wisdom.length % 2 == 0) {
    localStorage.setItem("wisdom", JSON.stringify(wisdom));
  }
};

$("#add-wisdom").on("click", function () {
  let text = $("#input").val();
  addWisdomPeice(text);
});

$("#clear-local-storage").on("click", function () {
  localStorage.clear();
});

const renderWisdomPiece = function () {
  $(".content").html("");
  wisdom.forEach((w, index) => {
    $(".content").append(`
    <div class="wisdom">
      <button type="button" id="${index}" class="delete-wisdom" data-id="${index}">X</button>
      <p>${w.text}</p>
    </div>`);
  });
};

$("body").on("click", ".delete-wisdom", function () {
  let index = $(this).data().id;
  wisdom.splice(index, 1);
  localStorage.setItem("wisdom", JSON.stringify(wisdom));
  renderWisdomPiece();
});

renderWisdomPiece();
