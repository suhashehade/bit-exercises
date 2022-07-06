const generatorBtn = $(".generator");
const validatorBtn = $(".validator");
let computersIds = []


generatorBtn.on("click", function(){
    let relevantDivProcessorId = $(this).closest(".processor");
    let relevantDivComputerId = $(this).closest(".computer");
    let relevantPargraphBUS = $(this).closest(".processor").siblings(".BUS");
    let processorId = relevantDivProcessorId.attr("id");
    let computerId = relevantDivComputerId.data().id;
    let id = {
        cmp_id: computerId
    }
    let bus = relevantPargraphBUS.text();
    computersIds.push(id);
    console.log("Processor ID: " + processorId);
    console.log("Computer’s data-id: " + computerId);
    console.log("BUS: " + bus);
});


validatorBtn.on("click", function(){
    let relevantBtnGenrator = $(this).closest(".ram").siblings(".processor").find(".generator");
    let relevantParagraphMB = $(this).closest(".ram").siblings(".MB");
    let relevantSpansQR = $(this).closest(".ram").siblings(".processor").find(".QR");
    let generatorBtnText = relevantBtnGenrator.text();
    let MB = relevantParagraphMB.text();
    let qrs = relevantSpansQR.text();
    console.log(generatorBtnText);
    console.log(MB);
    console.log(qrs)

})