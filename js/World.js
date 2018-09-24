const TILE_W = 40;
const TILE_H = 40;
const WORLD_SCALE = 0.5;
const W_ROWS = 20;
const W_COLS = 20;

var worldMap = [
				7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
				7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
				7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
				7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
				7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
				7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
				7,7,7,7,7,7,7,7,3,7,7,7,7,7,7,7,7,7,7,7,
				7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
				7,7,7,7,7,7,7,7,7,7,7,3,7,7,7,7,7,7,7,7,
				7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
				7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
				7,7,7,7,7,7,7,7,3,7,7,7,7,7,7,7,7,7,7,7,
				7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
				7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
				7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
				7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
				7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
				7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
				7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,
				7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7
				];	

const TILE_GROUND = 0;
const TILE_OCEAN = 2;
const TILE_ROAD = 3;
const TILE_TREE = 4;
const TILE_MOUNTAIN = 5;
const TILE_BEACH = 6;
const TILE_GRASS = 7;

const TILE_PLAYER = 1;

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
			canvasContext.drawImage(worldPics[tileType], tileLeftEgdeX, tileTopEdgeY);

			tileIndex++;
			tileLeftEgdeX += TILE_W;
		}
		tileTopEdgeY += TILE_H;
	}
}