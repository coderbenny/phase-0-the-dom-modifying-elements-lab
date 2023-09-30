// Write your code here!
const mainSection = document.querySelector("main");
mainSection.parentNode.removeChild(mainSection);

let newHeader = document.createElement("h1");
if (newHeader){
    newHeader.id = 'victory';
}
newHeader.textContent = "YOUR-NAME is the champion";

