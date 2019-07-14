function placeBanner() {
	const bannerrow = document.createElement('div'); //container
	bannerrow.setAttribute("class", "row");
	bannerrow.setAttribute("id", "picrow");

	//select a random image
	var pics = ["japan","glass","omellete","restaurant","barbecue","cuisine"];
	var nn = Math.floor(Math.random() * 6);
	var chosen = pics[nn]
	var picname =  "pichas/"+chosen+".jpg";


  	const banner = document.createElement('img'); 
  	// banner.src = "pichas/glass.jpg" ; 
  	banner.src = picname; 
  	banner.setAttribute('style', "width:1050px;height:400px;");   
 	bannerrow.appendChild(banner);

  return bannerrow;
}

export { placeBanner }


