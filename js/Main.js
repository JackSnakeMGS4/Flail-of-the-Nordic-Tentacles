var canvas, canvasContext;
var fps = 60;

window.onload = function()
{
	canvas = document.getElementById('gc');
	canvasContext = canvas.getContext('2d');

	loadImages();
	//player.reset();
}

function imgsDoneLoadingSoStartGame()
{
	setupInput();
	setInterval(updateAll, 1000/fps);
}

function updateAll()
{
	moveAll();
	drawAll();
}

function moveAll()
{

}

function drawAll()
{
	drawWorld();
}