
function placeButts() {
const bbutts = document.createElement('div'); //container
bbutts.setAttribute("class", "three columns");
bbutts.setAttribute("id", "buttons");
// bbutt.setAttribute('style', "margin-top: 50px;"); 
bbutts.innerHTML = 
  `
  <button id="a">Welcome   !!</button>        
  <button id="b">Our  Menu</button>        
  <button id="c">Reservations</button>        
  <button id="d">Contact  Us</button> 
  `;

return bbutts;
}

export { placeButts }

