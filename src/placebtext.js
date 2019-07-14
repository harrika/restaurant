
function placeBtext() {

  const bodystuff = document.createElement('div'); //container
  bodystuff.setAttribute("class", "row");
  bodystuff.setAttribute("id", "bodystuff");
  bodystuff.setAttribute('style', "margin-top: 30px;"); 


const btext = document.createElement('div'); //container
btext.setAttribute("class", "nine columns");
btext.setAttribute("id", "btext");
btext.setAttribute('style', "padding: 20px;"); 

btext.innerHTML = 
  `
  <h3> The Windsor </h3>
  <strong>Good Times are Here!
  Good times are here at The Windsor. Local eats in this neighborhood hideout 
  of the Near North Side are even tastier with our drink specials.
  Steps from the Magnificent Mile, The Windsor is the place for happy vibes
  and great conversation.</strong>   
  `;

  bodystuff.appendChild(btext);

return bodystuff;
}

export { placeBtext }
