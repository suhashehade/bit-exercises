const express = require("express");
const router = express.Router();

const wordCounter = {};

router.get("/sanity", function (request, response) {
  console.log("Server up and running");
});

router.get("/word/:word", function (request, response) {
  let word = request.params.word;
  let wordCount;
  if (wordCounter.hasOwnProperty(word)) {
    wordCount = {
      count: wordCounter[word],
    };
  } else {
    wordCount = {
      count: 0,
    };
  }
  response.send(wordCount);
});

router.post("/word", function (request, response) {
  let word = request.body.word;
  if (wordCounter.hasOwnProperty(word)) {
    wordCounter[word] += 1;
  } else {
    wordCounter[word] = 1;
  }
  let wordObj = {
    text: `Added ${word}`,
    currentCount: wordCounter[word],
  };
  response.send(wordObj);
});

router.post("/words/:sentence", function (request, response) {
  let sentence = request.params.sentence;
  if (sentence !== "") {
    let words = sentence.split(" ");
    let numNewWords = words.length;
    let numOldWords = 0;
    for (const key in wordCounter) {
      numOldWords += wordCounter[key];
    }

    let sentObj = {
      text: `Added ${numNewWords} words, ${numOldWords} already existed`,
      currentCount: -1,
    };
    response.send(sentObj);
  } else {
    return response.status(404).send("No text is sent");
  }
});

router.delete("/words/:word", function (request, response) {
  let word = request.params.word;
  if (!wordCounter.hasOwnProperty(word)) {
    return response.status(404).send("The key not found");
  } else {
    delete wordCounter[word];
    response.send(wordCounter);
  }
});

module.exports = router;
