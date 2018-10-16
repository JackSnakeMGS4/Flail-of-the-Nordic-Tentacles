var canvas, canvasContext;
var fps = 30;
var enemiesObj = {
	greenBean: {
		charName: "Green Bean",
		image: slimePic,
		instance: new slimeClass()
	},
	acidBean: {
		charName: "Acid Bean",
		image: slimePic,
		instance: new slimeClass()
	}
};
var viking = new vikingClass();

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

	viking.init(vikingPic, "Ragnar");
	enemiesObj.greenBean.instance.init(enemiesObj.greenBean.image,enemiesObj.greenBean.charName);
	enemiesObj.acidBean.instance.init(enemiesObj.acidBean.image,enemiesObj.acidBean.charName);
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
	enemiesObj.greenBean.instance.move();
	enemiesObj.acidBean.instance.move();
}

function battleAll()
{
	// viking.battle(enemiesObj.greenBean.instance);
	enemiesObj.greenBean.instance.battle(viking);
	enemiesObj.acidBean.instance.battle(viking);
}

function drawAll()
{
	drawWorld();
	enemiesObj.greenBean.instance.draw();
	enemiesObj.acidBean.instance.draw();
	viking.draw();
}