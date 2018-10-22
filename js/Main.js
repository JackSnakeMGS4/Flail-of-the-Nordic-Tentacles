var canvas, canvasContext;
var fps = 30;
var enemiesList = [];
const NUM_OF_ENEMIES_ON_SCREEN = 2;

var player = new playerClass();

/*
	there's a better way of running enemy code to enact DRY (dont' repeat yourself) principles;
	array for the win? but I foresee them destroying the game in terms of speed in general. gameplay such as Ys relies on that speed 
	to ensure fun whilst playing (that and it's killer OST)
*/

/*
	NOTE: will need a way to save just about everything from state of game to player's current spot in game
	NOTE: will have to implement some way enable faster character movement game
*/
window.onload = function()
{
	canvas = document.getElementById('gc');
	canvasContext = canvas.getContext('2d');

	loadImages();
}

function imgsDoneLoadingSoStartGame()
{
	setInterval(updateAll, 1000/fps);

	player.init(vikingPic, "Ragnar");

	findSpawnSpots();
	popEnemyList();
	for(var i = 0; i < enemiesList.length; i++)
	{
		//TODO: function to use the appropriate img for an enemy and a way to name them
		/*
			enemiesList[i].init(getPicForThisSpecificEnemy(), name of enemy)
		*/
		enemiesList[i].init(slimePic, "Slime " + i);
	}
	setupInput();
}

function updateAll()
{
	//spawnEnemyAtRandom();
	moveAll();
	battleAll();
	drawAll();
}

function moveAll()
{
	player.move();
	for(var i = 0; i < enemiesList.length; i++)
	{
		enemiesList[i].move();
	}
	cameraFollow();
}

function battleAll()
{
	// player.battle(enemiesObj.greenBean.instance);
	for(var i = 0; i < enemiesList.length; i++)
	{
		//checking for battle against player
		enemiesList[i].battle(player);
	}
}

function drawAll()
{
	canvasContext.save();
	canvasContext.translate(-camPanX, -camPanY);

	drawVisibleWorld();
	for(var i = 0; i < enemiesList.length; i++)
	{
		enemiesList[i].draw();
	}
	player.draw();

	canvasContext.restore();
}

function popEnemyList()
{
	for(var i = 0; i < NUM_OF_ENEMIES_ON_SCREEN; i++)
	{
		randomSpawn();
	}
}