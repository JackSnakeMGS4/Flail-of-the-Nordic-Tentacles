var canvas, canvasContext;
var fps = 30;
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
	battleAll();
	drawAll();
}

function moveAll()
{
	viking.move();
	slime.move();
}

function battleAll()
{
	viking.battle();
	slime.battle();
}

function drawAll()
{
	drawWorld();
	slime.draw();
	viking.draw();
}