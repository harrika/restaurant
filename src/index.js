import { placeBanner } from './placebanner'
import { placeButts } from './placebbutt'
import { placeBtext } from './placebtext'
import { placeBtextA } from './placebtexta'
import { placeBtextB } from './placebtextb'
import { placeBtextC } from './placebtextc'
import { placeBtextD } from './placebtextd'

document.getElementById('content').appendChild(placeBanner());
document.getElementById('content').appendChild(placeBtext());
document.getElementById('bodystuff').appendChild(placeButts());

document.querySelector('#a').addEventListener('click', adda);
document.querySelector('#b').addEventListener('click', addb);
document.querySelector('#c').addEventListener('click', addc);
document.querySelector('#d').addEventListener('click', addd);
var target = document.getElementById('buttons');

function clear() {
	//clear text area
	var elem = document.getElementById("btext");
	elem.remove();
}

function adda(e) {
	e.preventDefault();
	clear()
	document.getElementById('bodystuff').insertBefore(placeBtextA(), target);
	
}
function addb(e) {
	e.preventDefault();
	clear()
	document.getElementById('bodystuff').insertBefore(placeBtextB(), target);
}
function addc(e) {
	e.preventDefault();
	clear()
	document.getElementById('bodystuff').insertBefore(placeBtextC(), target);
}
function addd(e) {
	e.preventDefault();
	clear()
	document.getElementById('bodystuff').insertBefore(placeBtextD(), target);
}

