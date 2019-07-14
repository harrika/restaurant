
function placeBtextB() {

const btext = document.createElement('div'); //container
btext.setAttribute("class", "nine columns");
btext.setAttribute("id", "btext");
btext.setAttribute('style', "padding: 20px;"); 

btext.innerHTML = 
  `
<h3> Menu Items </h3>
<img src="pichas/menu1.png">
<img src="pichas/menu2.png">
<img src="pichas/menu3.png">
<img src="pichas/menu4.png">
  `;

return btext;
}

export { placeBtextB }
