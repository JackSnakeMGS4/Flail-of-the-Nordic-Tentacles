var worldPics = [];
var characterPics = [];

var picToLoad = 0;

function loadImages()
{
	var imageList = [
		// Character Pics Go Here
		// {charName: CHAR_TYPE from world.js, fileName: "playerPic.png"}
		{charName: TILE_PLAYER, fileName: "viking_quick.png"},
		// World Pics Go Here
		// {worldType: TILE_TYPE (as in variable that this file will be associated with) from World.js, fileName: "groundPic.png"}
		{worldType: TILE_ROAD, fileName: "road_quick.png"},
		{worldType: TILE_OCEAN, fileName: "ocean_quick.png"},
		{worldType: TILE_SNOW, fileName: "snow_quick.png"},
		{worldType: TILE_MOUNTAIN, fileName: "mountain_quick.png"},
		{worldType: TILE_TREE, fileName: "tree_quick.png"}
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