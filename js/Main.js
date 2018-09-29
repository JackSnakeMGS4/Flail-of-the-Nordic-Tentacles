var canvas, canvasContext;
var fps = 60;
var viking = new vikingClass();
var slime = new slimeClass();

window.onload = function()
{
	canvas = document.getElementById('gc');
	canvasContext = canvas.getContext('2d');

	loadImages();
}

function imgsDoneLoadingSoStartGame()
{
	setInterval(updateAll, 1000/fps);

	viking.init(vikingPic, "Ragnar");
	slime.init(slimePic, "Green Bean");
	setupInput();
}

function updateAll()
{
	moveAll();
	drawAll();
}

function moveAll()
{
	viking.move();
}

function drawAll()
{
	drawWorld();
	slime.draw();
	viking.draw();
}