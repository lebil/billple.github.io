document.getElementById('name').innerHTML = 'My name is Bill.';


let name = document.querySelector('#name');
let divCon = document.querySelector('.content');

//divCon.removeChild(name);

let readButton = document.querySelector('#readButton');

/*
function addParagraph(){
  let paragraph = document.createElement('p');
  paragraph.id = 'almost';
  paragraph.innerHTML = 'coding away!';
  document.getElementById('mainContent').appendChild(paragraph);
}
*/

readButton.onclick = () => {
  let paragraph = document.createElement('p');
  paragraph.id = 'almost';
  paragraph.innerHTML = 'coding away!';
  document.getElementById('mainContent').appendChild(paragraph);
};
