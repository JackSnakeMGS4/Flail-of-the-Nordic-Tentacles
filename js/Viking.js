const VIKING_SPEED = 3.0;

function vikingClass()
{
	this.centerX = 75;
	this.centerY = 75;
	this.hitbox = {radius: 15, x: this.centerX, y: this.centerY};

	this.stats = new statsClass();

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
		//not a good solution; what happens when we need to talk with multiple NPCs in the same small area;
		// OPINION: I could just check them for collision against the player and run the dialog code? 
		this.directionFaced = undefined;

		this.hitbox.x = this.centerX;
		this.hitbox.y = this.centerY;

		var nextX = this.centerX;
		var nextY = this.centerY;		

		if(this.goingNorth)
		{
			nextY -= VIKING_SPEED;
		}	
		if(this.goingSouth)
		{
			nextY += VIKING_SPEED;
		}
		if(this.goingWest)
		{
			nextX -= VIKING_SPEED;
		}
		if(this.goingEast)
		{
			nextX += VIKING_SPEED;
		}
		this.setDirectionFaced();

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
	}

	//Pretty sure this isn't needed if I just check the same thing from the enemy's js
	// this.battle = function(enemy)
	// {
	// 	TODO: find a way to reference enemies; once enemy can detected, check which player edge collide with which enemy edge;
	// 		if collision was player front on enemy front, dmg player; if collision was player front on enemy back or sides then dmg enemy
	// 		THINK OF Ys I and II
	// 		NOTE: use this.directionFaced and check it against slime's direction faced to find zone of collision
			
	// 	let dx = this.hitbox.x - enemy.hitbox.x;
	// 	let dy = this.hitbox.y - enemy.hitbox.y;
	// 	let distance = Math.sqrt(dx*dx + dy*dy);

	// 	if(distance < this.hitbox.radius + enemy.hitbox.radius)
	// 	{
	// 		//TODO: check direction faced on colliding characters and dmg the appropriate character
	// 		console.log("player colliding with enemy");
	// 	}
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

	this.setDirectionFaced = function()
	{
		//checking for W,E,S,N
		if(this.goingWest)
		{
			this.directionFaced = "West";
		}
		if(this.goingEast)
		{
			this.directionFaced = "East";
		}
		if(this.goingNorth)
		{
			this.directionFaced = "North";
		}
		if(this.goingSouth)
		{
			this.directionFaced = "South";
		}
		//checking for NW,NE,SW,SE
		if(this.goingNorth && this.goingWest)
		{
			this.directionFaced = "Northwest";
		}
		if(this.goingNorth && this.goingEast)
		{
			this.directionFaced = "Northeast";
		}
		if(this.goingSouth && this.goingWest)
		{
			this.directionFaced = "Southwest";
		}
		if(this.goingSouth && this.goingEast)
		{
			this.directionFaced = "Southeast";
		}
	}

	this.draw = function()
	{
		drawBitmapCenteredWithRot(this.bitmap, this.centerX, this.centerY, 0.0);
	}
}