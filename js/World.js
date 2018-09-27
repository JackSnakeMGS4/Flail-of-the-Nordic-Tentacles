const TILE_W = 40;
const TILE_H = 40;
const WORLD_SCALE = 0.5;
const W_ROWS = 20;
const W_COLS = 20;

var worldMap = [
				2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
				2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,5,5,5,5,1,
				2,2,2,2,2,1,1,1,1,1,1,1,1,1,5,5,5,5,5,1,
				2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,5,5,5,5,1,
				2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,5,5,5,1,1,
				1,1,2,2,2,2,2,1,1,1,1,1,1,1,1,1,3,1,1,1,
				1,1,2,2,2,2,2,1,1,1,1,1,1,1,1,1,3,1,1,1,
				1,1,1,1,2,2,2,1,1,1,1,1,1,1,1,3,3,1,1,1,
				1,1,1,2,2,2,3,1,1,1,1,1,1,1,3,3,1,1,2,1,
				1,1,1,2,2,2,1,3,1,1,1,1,3,3,3,1,1,4,2,2,
				1,1,1,1,1,1,1,1,3,3,3,3,3,1,1,1,4,4,2,2,
				1,1,1,1,1,1,1,1,1,1,1,3,1,1,4,4,4,4,2,2,
				1,1,1,1,1,1,1,0,1,1,1,3,3,4,4,4,4,4,2,2,
				1,1,1,1,1,1,1,1,1,1,1,1,1,4,4,4,4,4,2,2,
				1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2
				];	

const TILE_SNOW = 1;
const TILE_OCEAN = 2;
const TILE_ROAD = 3;
const TILE_TREE = 4;
const TILE_MOUNTAIN = 5;

const TILE_PLAYER = 0;
const TILE_ENEMY = 6;

function drawWorld()
{
	var tileIndex = 0;
	var tileLeftEdgeX = 0;
	var tileTopEdgeY = 0;

	for(var row = 0; row < W_ROWS; row++)
	{
		tileLeftEgdeX = 0;
		for(var col = 0; col < W_COLS; col++)
		{
			var tileType = worldMap[tileIndex];
			if(tileType != undefined)
			{
				canvasContext.drawImage(worldPics[tileType], tileLeftEgdeX, tileTopEdgeY);
			}
			
			tileIndex++;
			tileLeftEgdeX += TILE_W;
		}
		tileTopEdgeY += TILE_H;
	}
}

function getTileIndexAtRowCol(tileX, tileY)
{
	
}