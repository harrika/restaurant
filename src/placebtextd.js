
function placeBtextD() {

const btext = document.createElement('div'); //container
btext.setAttribute("class", "nine columns");
btext.setAttribute("id", "btext");
btext.setAttribute('style', "padding: 20px;"); 

btext.innerHTML = 
  `
<h3> The WINDSOR </h3>
160 EAST HURON / CHICAGO <br>
(312)943–7777			opem Monday - Sunday <br>
windsor@4srg.com <br>
Contact Mallory McSweeney at mmcsweeney@4srg.com or (312) 952-6120 to book your next event.

  `;

return btext;
}

export { placeBtextD }
