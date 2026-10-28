"use strict";

let photoswitch, bckgrnd;

const photos = [
	"caribpurple","cormorantcrest","cranesand","crowamerican",
	"deertailed","doveear",
	"egretcattle",
	"foxred",
	"gracklecarib","grebewestern","grouseruff","gullring",
	"heronblue",
	"jaycanada",
	"kingbirdeast",
	"magpieblack","mallardhen","moosecalf",
	"nutcrackerclark",
	"owlhorn",
	"pelicanbrown","pigeonrock","ptarmiganjasper",
	"ravencommon","robinamerican",
	"squirrelamerican","squirrelcolumbian","squirrelgolden","squirrellined",
	"terncommon",
	"warblerpalm","warblerrump"
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
	bckgrnd.style.background = "url('../media/nature/" + photos[i++] + ".jpg') center no-repeat";
	bckgrnd.style.backgroundSize = "cover";
	
	photoswitch.addEventListener("click", function() {
		bckgrnd = document.getElementById("background");
		
		if(i >= photos.length) { i = 0;	}
		
		bckgrnd.style.backgroundImage = "url('../media/nature/" + photos[i++] + ".jpg')";
	});
});