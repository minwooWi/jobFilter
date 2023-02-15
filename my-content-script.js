const par = document.getElementsByClassName('list-default');
const myElements = par[0].getElementsByClassName('list-post');
const myElementsArray = Array.from(myElements);

const excludedTerms = ['위즈','우영','제이','인텍'];
const filteredElements = myElementsArray.filter((el) => !excludedTerms.some(term => el.innerText.includes(term)));

const element = par[0].getElementsByClassName('clear')
element[0].innerHTML = "";

for (var i = 0; i < filteredElements.length; i++) {
  element[0].appendChild(filteredElements[i]);
}