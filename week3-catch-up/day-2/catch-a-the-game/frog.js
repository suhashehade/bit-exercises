const Frog = function () {
  let frogs = [];

  let playing_field_width = 600;
  let playing_field_height = 425;

  let time = 2;

  let frogCount = 0;
  let frogsLeft = 0;
  let currentLevel = 1;

  let frogColors = [
    "red",
    "blue",
    "white",
    "purple",
    "black",
    "yellow",
    "pink",
    "orange",
    "brown",
    "gray",
  ];
  let topPositions = [0, 25, 50, 75];
  let leftPositions = [0, 25, 50, 75];

  const addFrog = function () {
    frogCount++;

    let id = "f" + frogCount;
    let frogColor = changeColor();
    let topPosition = changeTopPosition();
    let leftPosition = changeLeftPosition();
    let frogSize = changeSize(topPosition);

    let frog = {
      id: id,
      color: frogColor,
      top: topPosition,
      left: leftPosition,
      size: frogSize,
    };
    frogs.push(frog);
  };

  const showCurrentLevel = function () {
    return currentLevel;
  };

  const removeFrog = function (frogId) {
    for (let index in frogs) {
      if (frogs[index].id === frogId) {
        frogs.splice(index, 1);
      }
    }
  };

  const updateCurrentLevel = function () {
    if (frogs.length == 0) {
      currentLevel++;
    }
  };

  const updateTime = function () {
    if (frogs.length == 0) {
      time++;
    }
  };

  const updateFrogsLeft = function () {
    frogsLeft = frogs.length;
  };

  const showFrogsLeft = function () {
    return frogsLeft;
  };

  const showTime = function () {
    return time;
  };

  const getFrogs = function () {
    for (let frog of frogs) {
      frog.color = changeColor();
      frog.topPosition = changeTopPosition();
      frog.leftPosition = changeLeftPosition();
      frog.size = changeSize(frog.topPosition);
    }

    return frogs;
  };

  const changeTopPosition = function () {
    let topIndex = Math.floor(Math.random() * 4);
    let topPosition = topPositions[topIndex];
    return topPosition;
  };

  const changeLeftPosition = function () {
    let leftIndex = Math.floor(Math.random() * 4);
    let leftPosition = leftPositions[leftIndex];
    return leftPosition;
  };

  const changeColor = function () {
    let colorIndex = Math.floor(Math.random() * 10);
    let frogColor = frogColors[colorIndex];
    return frogColor;
  };

  const changeSize = function (topPosition) {
    let fontSizeRatio = 20;
    let frogSize = topPosition + fontSizeRatio;
    return frogSize;
  };

  return {
    addFrog: addFrog,
    removeFrog: removeFrog,
    updateFrogsLeft: updateFrogsLeft,
    showFrogsLeft: showFrogsLeft,
    updateCurrentLevel: updateCurrentLevel,
    showCurrentLevel: showCurrentLevel,
    getFrogs: getFrogs,
    updateTime: updateTime,
    showTime: showTime,
  };
};
