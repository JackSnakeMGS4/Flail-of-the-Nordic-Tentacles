var canvas, canvasContext;
var fps = 60;
var player = new vikingClass();

window.onload = function()
{
	canvas = document.getElementById('gc');
	canvasContext = canvas.getContext('2d');

	loadImages();
}

function imgsDoneLoadingSoStartGame()
{
	setupInput();
	player.init(playerPic, "Ragnar");
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
	player.draw();
}