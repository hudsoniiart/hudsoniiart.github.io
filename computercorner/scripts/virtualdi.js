"use strict";

let intervalID;
let timeoutID;

let bFinished;

let numDi;
let btnRoll;
let divDi;
let parStats;

window.addEventListener("load", function()
{
	numDi = document.getElementById("numDi");
	
	btnRoll = document.getElementById("btnRoll");
	
	divDi = document.getElementById("divDi");
	
	parStats = document.getElementById("parStats");
	
	createDi();
	
	document.getElementById("numDi").addEventListener("change", function()
	{
		createDi();
	});
	
	document.getElementById("btnRoll").addEventListener("click", function()
	{
		rollDi();
	});
});

function createDi()
{
	bFinished = false;
	
	clearInterval(intervalID);
	clearTimeout(timeoutID);
	
	btnRoll.disabled = false;

	while(divDi.lastChild)
	{
		divDi.removeChild(divDi.lastChild);
	}
	
	for(let i = 0; i < numDi.value && i < 500; i++)
	{
		var imgDi = document.createElement("img");
		imgDi.src = "computercorner/media/0.png";
		imgDi.className = "imgDi";
		
		divDi.appendChild(imgDi);
	}
}

function rollDi()
{
	if(numDi.value > 0 && numDi.value < 500)
	{
		btnRoll.disabled = true;
		
		intervalID = setInterval(changeDi, 100);
		
		timeoutID = setTimeout(endRoll, 1000);
	}
	else
	{
		alert("Please enter a value between 0 and 500.");
	}
}

// Change the value of the di images.
function changeDi()
{
	let children = divDi.children;
	
	for(let i = 0; i < children.length; i++)
	{
		let imgDi = children[i];
	  
		let diValue = Math.ceil(Math.random() * 6);

		switch(diValue)
		{
			case 1:
				imgDi.src = "computercorner/media/1.png";
				imgDi.alt = "1";
				break;
				
			case 2:
				imgDi.src = "computercorner/media/2.png";
				imgDi.alt = "2";
				break;
				
			case 3:
				imgDi.src = "computercorner/media/3.png";
				imgDi.alt = "3";
				break;
				
			case 4:
				imgDi.src = "computercorner/media/4.png";
				imgDi.alt = "4";
				break;
				
			case 5:
				imgDi.src = "computercorner/media/5.png";
				imgDi.alt = "5";
				break;
				
			case 6:
				imgDi.src = "computercorner/media/6.png";
				imgDi.alt = "6";
				break;
		}
	}
}

function endRoll()
{
	clearInterval(intervalID);
	
	btnRoll.disabled = false;
	
	let children = divDi.children;
		
	let total = 0;
	
	for(let i = 0; i < children.length; i++)
	{
		let imgDi = children[i];
		
		switch(imgDi.alt)
		{
			case "1":
				imgDi.title = "1";
				
				total += 1;
				break;
				
			case "2":
				imgDi.title = "2";
				
				total += 2;
				break;
				
			case "3":
				imgDi.title = "3";
				
				total += 3;
				break;
				
			case "4":
				imgDi.title = "4";
				
				total += 4;
				break;
				
			case "5":
				imgDi.title = "5";
				
				total += 5;
				break;
				
			case "6":
				imgDi.title = "6";
				
				total += 6;
				break;
		}
	}
}