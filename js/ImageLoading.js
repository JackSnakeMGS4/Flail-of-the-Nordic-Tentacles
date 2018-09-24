var worldPics = [];
var characterPics = [];

var picToLoad = 0;

function loadImages()
{
	var imageList = [
		// Character Pics Go Here
		// {charName: CHAR_TYPE from world.js, fileName: "playerPic.png"}
		// World Pics Go Here
		// {worldType: TILE_TYPE from World.js, fileName: "groundPic.png"}
		{worldType: TILE_GRASS, fileName: "grassy_ground.png"},
		{worldType: TILE_ROAD, fileName: "dirt_road.png"}
		]

	picsToLoad = imageList.length;

	for(var i = 0; i < imageList.length; i++)
	{
		if(imageList[i].charName != undefined)
		{
			loadCharPics(imageList[i].charName, imageList[i].fileName);
		}
		else if(imageList[i].worldType != undefined)
		{
			loadWorldPics(imageList[i].worldType, imageList[i].fileName);
		}
	}
}

function beginLoadingImages(imgVar, fileName)
{
	imgVar.onload = countLoadedImgsAndLaunchIfAble();
	imgVar.src = "images/" + fileName;
}

function countLoadedImgsAndLaunchIfAble()
{
	picsToLoad--;
	console.log(picsToLoad);
	if(picsToLoad == 0)
	{
		imgsDoneLoadingSoStartGame();
	}
}

function loadCharPics(charCode, fileName)
{
	characterPics[charCode] = document.createElement("img");
	beginLoadingImages(characterPics[charCode], fileName);
}

function loadWorldPics(worldCode, fileName)
{
	worldPics[worldCode] = document.createElement("img");
	beginLoadingImages(worldPics[worldCode], fileName);
}