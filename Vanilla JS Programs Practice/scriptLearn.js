
function param() {
    console.log("I am parameter called from another function.");
}
// think over this param
//variable name and function name cannot be same.
function functionToAcceptFunctionParam() {
    param();
}

let a = "Vijaya";
functionToAcceptFunctionParam(a);