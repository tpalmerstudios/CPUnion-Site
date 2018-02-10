var next=0;
slider();
function slider()
{
	var current;
	var images = document.getElementsByClassName("photos");
	for ( current = 0; current < images.length; current++ )
	{
		images[current].style.display = "none";
	}
	next++;
	if ( next > images.length )
	{
		next = 1;
	}
	images[next-1].style.display = "block";
	setTimeout( slider, 3000 );
}

