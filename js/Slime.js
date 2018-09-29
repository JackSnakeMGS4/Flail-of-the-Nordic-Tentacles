const SLIME_SPEED = 1.5;
const TILES_ABLE_TO_PATROL = 2;

function slimeClass()
{
	this.x = 0;
	this.y = 0;

	this.isPatrolling = true;

	this.init = function(image, name)
	{
		this.bitmap = image;
		this.charName = name;
		this.reset();
	}

	this.reset = function()
	{
		if(this.homeX == undefined)
		{
			for(var i = 0; i < worldMap.length; i++)
			{
				if(worldMap[i] == TILE_ENEMY)
				{
					var tileRow = Math.floor(i/W_COLS);
					var tileCol = i%W_COLS;
					this.homeX = tileCol * TILE_W + 0.5 * TILE_W;
					this.homeY = tileRow * TILE_H + 0.25 * TILE_H;
					worldMap[i] = TILE_SNOW;
					break;
				}
			}
		}
		this.x = this.homeX;
		this.y = this.homeY;
	}

	this.move = function()
	{
		var nextX = this.x;
		var nextY = this.y;

		// var  this.patrolRouteX(nextX);

		var nextTileIndex = getTileIndexAtRowCol(nextX, nextY);
		var nextTileType = TILE_SNOW;

		if(nextTileIndex != undefined)
		{
			nextTileType = worldMap[nextTileIndex];
		}

		if(this.moveIfAble(nextTileType))
		{
			this.x = nextX;
			this.y = nextY;
		}
	}

	// this.patrolRouteX = function(nextX)
	// {

	// }

	this.moveIfAble = function(tileType)
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

	this.draw = function()
	{
		drawBitmapCenteredWithRot(this.bitmap, this.x, this.y, 0.0);
	}
}