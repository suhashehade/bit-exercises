const Renderer = function () {
  const renderFrogs = function (frogs) {
    $("#playing-field").html("");
    for (let frog of frogs) {
      $("#playing-field").append(
        `<span id="${frog.id}" data-id="${frog.id}" class="frog" style="top: ${frog.top}%; 
                  left: ${frog.left}%;">
                <i class="fas fa-frog" style="color:${frog.color}; font-size: ${frog.size}px;"></i>
         </span>
        `
      );
    }
  };

  const renderCurrentLevel = function (currentLevel) {
    $(".level").html("Level - " + currentLevel);
  };

  const renderFrogsLeft = function (frogLeft) {
    $(".frogs-left").html(frogLeft + " Frogs Left ");
  };

  const hideFrog = function (frogElemId) {
    let dataId = "#" + frogElemId;
    $(dataId).attr("hidden", true);
  };

  const renderTime = function (counter) {
    $("#header").html("");
    $("#header").append(`
         <p class="time-interval">Time Interval ${counter}</p>
     `);
  };

  const changeColor = function () {
    let timeIntervalPar = $("#playing-field").find(".time-interval");
    timeIntervalPar.css("color", "red");
  };

  const renderAlert = function () {
    $("#playing-field").html("");
    $("#playing-field").append(`
             <div class="alert">
               <p>No frogs Now</p>
             </div>
                
    `);
  };

  const renderBtn = function () {
    $("button").attr("disabled", false);
    $("button").html("Start");
  };

  return {
    renderFrogs: renderFrogs,
    renderCurrentLevel: renderCurrentLevel,
    renderFrogsLeft: renderFrogsLeft,
    hideFrog: hideFrog,
    renderTime: renderTime,
    renderBtn: renderBtn,
    renderAlert: renderAlert,
    changeColor: changeColor,
  };
};
