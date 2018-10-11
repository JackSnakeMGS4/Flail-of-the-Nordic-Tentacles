const VIKING_SPEED = 2.0;

function vikingClass()
{
	this.centerX = 75;
	this.centerY = 75;
	this.leftEdge;
	this.rightEdge;
	this.topEdge;
	this.bottomEdge;

	this.goingNorth = false;
	this.goingSouth = false;
	this.goingWest = false;
	this.goingEast = false;

	this.directionFaced;

	this.setupInput = function(north,south,west,east)
	{
		this.ctrlNorth = north;
		this.ctrlSouth = south;
		this.ctrlWest = west;
		this.ctrlEast = east;
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

		this.centerX = this.homeX;
		this.centerY = this.homeY;
	}

	this.move = function()
	{
		var nextX = this.centerX;
		var nextY = this.centerY;		

		//TODO: function to set which direction is being faced just like the one implemented in We Must Prepare @Player.js @this.move
		if(this.goingNorth)
		{
			nextY -= VIKING_SPEED;
			this.directionFaced = "North";
		}	
		if(this.goingSouth)
		{
			nextY += VIKING_SPEED;
			this.directionFaced = "South";
		}
		if(this.goingWest)
		{
			nextX -= VIKING_SPEED;
			this.directionFaced = "West";
		}
		if(this.goingEast)
		{
			nextX += VIKING_SPEED;
			this.directionFaced = "East";
		}

		var nextTileIndex = getTileIndexAtRowCol(nextX, nextY);
		var nextTileType = TILE_SNOW;
		//console.log(this.centerX, this.centerY, nextTileIndex);

		if(nextTileIndex != undefined)
		{
			nextTileType = worldMap[nextTileIndex];

			if(this.moveIfAble(nextTileType))
			{
				this.centerX = nextX;
				this.centerY = nextY;
			}
		}

		this.leftEdge = this.centerX - this.bitmap.width/2;
		this.rightEdge = this.centerX + this.bitmap.width/2;
		this.topEdge = this.centerY - this.bitmap.height/2;
		this.bottomEdge = this.centerY + this.bitmap.height/2;

		// console.log(this.leftEdge, this.rightEdge, this.topEdge, this.bottomEdge);
	}

	this.battle = function(enemy)
	{
		/*TODO: find a way to reference enemies; once enemy can detected, check which player edge collide with which enemy edge;
			if collision was player front on enemy front, dmg player; if collision was player front on enemy back or sides then dmg enemy
			THINK OF Ys I and II
			NOTE: use this.directionFaced and check it against slime's direction faced to find zone of collision
		*/	
	}

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
		drawBitmapCenteredWithRot(this.bitmap, this.centerX, this.centerY, 0.0);
	}
}