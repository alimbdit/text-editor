

function getTextFromInput (id){
    const inputString = document.getElementById(id);
    return inputString;
}
// function setTextFromInput (id, value){
//     const inputString = document.getElementById(id).value;
//     const boldInputString = inputString.style.fontWeight = "900";
//     document.getElementById(id).value = boldInputString;
// }

function textAlignFunction (id, align){
    const target = document.getElementById(id);
    target.style.textAlign = align;
}
