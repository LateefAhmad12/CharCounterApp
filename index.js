const charVal = document.getElementById("textarea");
let totalCount = document.getElementById("total-counter");
let remainingCount = document.getElementById("remaining-counter");

let userChar = 0;
const updateCounter = () => {
    userChar = charVal.value.length;
    userChar = totalCount.innerHTML;
    remainingCount.innerHTML = 150-userChar;

}

charVal.addEventListener("keyup", () => updateCounter());


const textCopy = () => {
    charVal.select();
    charVal.setSelectionRange(0,999);
    navigator.clipboard.writeText(charVal.value)
}