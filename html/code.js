var x ;
var y ;
var s ;
var ctx ;
var w ;
var h ;

document.addEventListener('keydown', keybind);

function keybind()
{
	const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
	ctx.fillStyle = "white";
	ctx.fillRect(x, y, s, s) ; // x y width height
	ctx.fillStyle = "black";
	switch (event.key) {
		case "ArrowLeft":
		case "a":
			x = x - s > 0 - s ? x - s : x ;
			break ;
		case "ArrowRight":
		case "d":
			x = x + s < w ? x + s : x ;
			break ;
		case "ArrowUp":
		case "w":
			y = y - s > 0 - s ? y - s : y ;
			break ;
		case "ArrowDown":
		case "s":
			y = y + s < h ? y + s : y ;
			break ;
	}
	ctx.fillRect(x, y, s, s) ; // x y width height
}

function draw()
{
	const dspl = document.getElementById("display") ;
	ctx = dspl.getContext("2d") ;	
	w = dspl.width ;
	h = dspl.height ;
	s = w / 8 ;
	x = w / 2 - s / 2 ;
	y = h / 2 - s / 2 ;
	ctx.fillRect(x, y, s, s) ; // x y width height
}
