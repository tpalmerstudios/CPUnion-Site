var next=0;
var autoplay=1;
slider();
function slider()
{
	if (!autoplay)
	{
		return 0;
	}
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
	setTimeout( slider, 5000 );
}

function nextImage()
{
	autoplay=0;
}

