const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};


const logData = function(data){
    console.log(data);
    
}

const logDataFunc = function(){
    logData(data);
}

const alertDataFunc = function(data){
    alert(data)
}


displayData(alert, logData, "I like to party");
