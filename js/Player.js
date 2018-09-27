const PLAYER_SPEED = 4.0;

function vikingClass()
{
	this.x = 75;
	this.y = 75;

	this.goingNorth = false;
	this.goingSouth = false;
	this.goingWest = false;
	this.goingEast = false;

	this.setupInput = function(north,south,west,east)
	{
		this.ctrlNorth = north;
		this.ctrlSouth = south;
		this.ctrlWest = west;
		this.ctrlEast =east;
	}

	this.init = function(image, name)
	{
		this.bitmap = image;
		this.charName = name;
		this.reset();
	}

	this.reset = function()
	{
		//reset player stats to last saved stats
		//reset player health, buffs, etc
		if(this.homeX == undefined)
		{
			for(var i = 0; i < worldMap.length; i++)
			{
				if(worldMap[i] == TILE_PLAYER)
				{
					var tileRow = Math.floor(i/W_COLS);
					var tileCol = i%W_COLS;
					this.homeX = tileCol * TILE_W + 0.5 * TILE_W;
					this.homeY = tileRow * TILE_H + 0.5 * TILE_H;
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

		if(this.goingNorth)
		{
			nextY -= PLAYER_SPEED;
		}	
		if(this.goingSouth)
		{
			nextY += PLAYER_SPEED;
		}
		if(this.goingWest)
		{
			nextX -= PLAYER_SPEED;
		}
		if(this.goingEast)
		{
			nextY += PLAYER_SPEED;
		}

		var nextTileIndex = getTileIndexAtRowCol(nextX, nextY);
		var nextTileType = TILE_SNOW;

		if(nextTileIndex != undefined)
		{
			nextTileType = worldMap[nextTileIndex];
		}
	}

	this.draw = function()
	{
		drawBitmapCenteredWithRot(this.bitmap, this.x, this.y, 0.0);
	}
}