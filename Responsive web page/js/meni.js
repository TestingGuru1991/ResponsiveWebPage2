var timeout	= 1000;
var closetimer	= 0;
var ddmenuitem	= 0;

// prikazi objekat
function mopen(id)
{	
	// prekini uklanjanje
	mcancelclosetime();

	// zatvori ako nesto ima otvoreno
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';

	// prikazi sta treba
	ddmenuitem = document.getElementById(id);
	ddmenuitem.style.visibility = 'visible';
}
// ukloni objekat
function mclose()
{
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';
}

// ukloni objekat posle time-out-a pozivom funkcije za uklanjanje
function mclosetime()
{
	closetimer = window.setTimeout(mclose, timeout);
}

// prekini uklanjanje
function mcancelclosetime()
{
	if(closetimer)
	{
		window.clearTimeout(closetimer);
		closetimer = null;
	}
}

// na klik u celom dokumentu, zatvori meni
document.onclick = mclose;