const complaintType = require("./consts");

const handleComplaints = function (complaint) {
  if (complaint.type === complaintType.finance) {
    console.log("Money doesn’t grow on trees, you know.");
  } else {
    if (complaint.type === complaintType.weather) {
      console.log("It is the way of nature. Not much to be done.");
    } else {
      if (complaint.type === complaintType.emotions) {
        console.log("It’ll pass, as all things do, with time.");
      }
    }
  }
};

module.exports.handleComplaints = handleComplaints;
