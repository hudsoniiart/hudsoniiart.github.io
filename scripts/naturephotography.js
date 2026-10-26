"use strict";

let photoswitch, bckgrnd;

const photos = [
	"caribpurple",
	"deertailed","doveear",
	"egretcattle",
	"gracklecarib","grebewestern","gullring",
	"heronblue",
	"jaycanada",
	"kingbirdeast",
	"mallardhen","moosecalf",
	"owlhorn",
	"pelicanbrown","ptarmiganjasper",
	"robinamerican",
	"squirrelcolumbian","squirrellined",
	"terncommon",
	"warblerrump",
];

// This is the Fisher-Yates Shuffle algorithm. I used the following resource to understand it.
// https://bost.ocks.org/mike/shuffle/
var m = photos.length, t, i;
while(m) {
	i = Math.floor(Math.random() * m--);
	
	t = photos[m];
	
	photos[m] = photos[i];
	
	photos[i] = t;
}

var i = 0;

window.addEventListener("load", function() {
	photoswitch = document.getElementById("photoswitch");
	
	bckgrnd = document.getElementById("background");
	bckgrnd.style.background = "url('../media/nature/" + photos[i++] + ".jpg') no-repeat center";
	
	photoswitch.addEventListener("click", function() {
		bckgrnd = document.getElementById("background");
		
		if(i >= photos.length) { i = 0;	}
		
		bckgrnd.style.backgroundImage = "url('../media/nature/" + photos[i++] + ".jpg')";
	});
});