
var today = new Date();
var h = today.getHours();
var color;

if((h<=12)&&(h>=6)) {
	color = '#f3f3f3';
} else if((h>12)&&(h<18)) {
	color = '#f3f3f3';
} else if((h>18)&&(h<23)) {
	color = '#282df0';
}

document.body.style.backgroundColor = color;
