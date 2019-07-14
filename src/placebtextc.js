
function placeBtextC() {

const btext = document.createElement('div'); //container
btext.setAttribute("class", "nine columns");
btext.setAttribute("id", "btext");
btext.setAttribute('style', "padding: 20px;"); 

btext.innerHTML = 
  `
<h3> Private & Dinning Events </h3>
<strong> Host your next special event at The Windsor! 
Our private and semi-private spaces are available for groups ranging from 10 to 200
for breakfast, lunch, dinner, or a cocktail reception. The Windsor is Streeterville’s 
neighborhood hangout – comfortable and fun with an elevated menu and level of hospitality that will make your experience unforgettable. From board meetings and business dinners to holiday parties and rehearsal dinners, 
our team is here to help you create the perfect event. </strong><br><br>


  `;

return btext;
}

export { placeBtextC }
