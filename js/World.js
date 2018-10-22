//TODO: implement transitions between scenes like going from a dungeon to a town if town isn't in dungeon
const TILE_W = 40;
const TILE_H = 40;
const WORLD_SCALE = 0.5;
const W_ROWS = 17;
const W_COLS = 22;

/*TODO: don't want enemies location to be predetermined at launch. want them to spawn
(but not drawn; that will happen when they are within the camera focus) at a random
tile at runtime.
	Currently, if I changed the const for # of enemies on screen in Main.js it will work
	but that extra enemy will get draw at 0x,0y
	this will go away as soon as I get that randomLocation function implemented...
	hopefully
*/
var enemiesStartSpots = [];
var worldMap = [
				2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
				2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,
				2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,5,5,5,5,1,2,
				2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,5,5,5,5,5,1,2,
				2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,6,5,5,5,5,1,2,
				2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,5,5,5,1,1,2,
				2,1,1,2,2,2,2,2,1,1,1,1,1,1,1,1,1,3,1,1,1,2,
				2,1,1,2,2,2,2,2,1,1,1,1,1,1,1,1,1,3,1,1,1,2,
				2,1,1,1,1,2,2,2,1,1,1,0,1,1,1,1,3,3,1,1,1,2,
				2,1,1,1,2,2,2,3,1,1,1,1,1,1,1,3,3,1,1,2,1,2,
				2,1,1,1,2,2,2,1,3,1,1,1,1,3,3,3,1,1,4,2,2,2,
				2,1,1,6,1,1,1,1,1,3,3,3,3,3,1,1,1,4,4,2,2,2,
				2,1,1,1,1,1,1,1,1,1,1,1,3,1,1,4,4,4,4,2,2,2,
				2,1,1,1,1,1,1,1,1,1,1,1,3,3,4,4,4,4,4,2,2,2,
				2,1,1,1,1,1,1,1,1,1,1,1,6,1,4,4,4,4,4,2,2,2,
				2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,
				2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
				];	

const TILE_SNOW = 1;
const TILE_OCEAN = 2;
const TILE_ROAD = 3;
const TILE_TREE = 4;
const TILE_MOUNTAIN = 5;

const TILE_PLAYER = 0;
const TILE_ENEMY = 6;

function drawVisibleWorld()
{
	var camLeftMostCol = Math.floor(camPanX/TILE_W);
	var camTopMostRow = Math.floor(camPanY/TILE_H);

	var colsThatFitOnScreen = Math.floor(canvas.width/TILE_W);
	var rowsThatFitOnScreen = Math.floor(canvas.height/TILE_H);

	var camRightMostCol = camLeftMostCol + colsThatFitOnScreen + 2;
	var camBottomMostRow = camTopMostRow + rowsThatFitOnScreen + 1;

	for(var col=camLeftMostCol; col<camRightMostCol; col++)
	{
		for(var row=camTopMostRow; row<camBottomMostRow; row++)
		{
			if(doesTileExistAtTileCoord(col,row))
			{
				var tileIndex = roomTileToIndex(col,row);
				var tileType = worldMap[tileIndex];
				var tileLeftEgdeX = col * TILE_W;
				var tileTopEdgeY = row * TILE_H;

				if(tileType != undefined)
				{
					canvasContext.drawImage(worldPics[tileType], tileLeftEgdeX, tileTopEdgeY);
				}				
			}
		}
	}
}

function getTileIndexAtRowCol(pxX, pxY)
{
	var tileCol = pxX / TILE_W;
	var tileRow = pxY / TILE_H;

	tileCol = Math.floor(tileCol);
	tileRow = Math.floor(tileRow);

	if(tileCol < 0 || tileCol >= W_COLS ||
		tileRow < 0 || tileRow >= W_ROWS)
	{
		console.log("TILE does not exist");
		return undefined;
	}

	var tileIndex = roomTileToIndex(tileCol, tileRow);
	return tileIndex;
}

function roomTileToIndex(tileCol, tileRow)
{
	return (tileCol + W_COLS * tileRow);
}

function doesTileExistAtTileCoord(tileCol, tileRow)
{
	var tileIndex = roomTileToIndex(tileCol, tileRow);
	return	(worldMap[tileIndex] != undefined);
}

function moveCharIfAble(tileType)
{
	switch(tileType)
	{
		case TILE_SNOW:
			return true;
			break;
		case TILE_ROAD:
			return true;
			break;
		case TILE_OCEAN:
			return false;
			break;
		case TILE_TREE:
			return false;
			break;
		case TILE_MOUNTAIN:
			return false;
			break;
		default:
			return false;
			break;
	}
}

/*
function randomEnemyLocationThatsWalkable()
*/