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
	setInterval(updateAll, 1000/fps);

	player.init(playerPic, "Ragnar");
	setupInput();
}

function updateAll()
{
	moveAll();
	drawAll();
}

function moveAll()
{
	player.move();
}

function drawAll()
{
	drawWorld();
	player.draw();
}