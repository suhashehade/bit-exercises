const frog = Frog();
const renderer = Renderer();

const render = () => renderer.renderFrogs(frog.getFrogs());

const renderCurLevel = () =>
  renderer.renderCurrentLevel(frog.showCurrentLevel());

const renderLeftFrogs = () => renderer.renderFrogsLeft(frog.showFrogsLeft());

let time = frog.showTime();
let interval = time * 1000;
let frogsNumber = frog.showFrogsLeft();
let level = frog.showCurrentLevel();
let counter = time;

$("button").on("click", function () {
  let timer = setInterval(function () {
    time = frog.showTime();
    interval = time * 1000;
    frogsNumber = frog.showFrogsLeft();
    level = frog.showCurrentLevel();
    counter = time;
    renderer.renderTime(counter);
    if (counter == 3) {
      renderer.changeColor();
      renderer.renderTime(counter);
    }
    if (counter == 0 && frogsNumber != 0) {
      renderer.renderAlert();
      clearInterval(timer);
    }
    counter--;
    renderer.renderTime(counter);
  }, interval);

  frog.addFrog();
  frog.updateCurrentLevel();
  frog.updateTime();
  frog.updateFrogsLeft();
  renderCurLevel();
  renderLeftFrogs();
  render();
  $(this).text("Press Frogs ...");
  $(this).attr("disabled", true);
});

$(".playing-field").on("click", ".frog", function () {
  let frogElement = $(this);
  let frogId = frogElement.data().id;

  let timer = setInterval(function () {
    counter = frog.showTime();
    interval = time * 1000;
    frogsNumber = frog.showFrogsLeft();
    level = frog.showCurrentLevel();
    counter = time;
    renderer.renderTime(counter);
    if (counter == 3) {
      renderer.changeColor();
      renderer.renderTime(counter);
    }
    if (counter == 0 && frogsNumber != 0) {
      renderer.renderAlert();
      clearInterval(timer);
    }
    counter--;
    renderer.renderTime(counter);
  }, interval);

  if (frog.showFrogsLeft() == 1) {
    frog.removeFrog(frogId);
    frog.updateFrogsLeft();
    frog.updateCurrentLevel();
    frog.updateTime();
    for (let i = 1; i <= frog.showCurrentLevel(); i++) {
      frog.addFrog();
    }
    frog.updateFrogsLeft();
    frog.updateCurrentLevel();
    frog.updateTime();
    renderCurLevel();
    renderLeftFrogs();
    render();
  } else {
    frog.removeFrog(frogId);
    frog.updateFrogsLeft();
    frog.updateCurrentLevel();
    frog.updateTime();
    renderCurLevel();
    renderLeftFrogs();
    render();
  }
});
