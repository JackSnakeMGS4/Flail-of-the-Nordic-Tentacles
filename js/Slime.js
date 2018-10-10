const SLIME_SPEED = 2.0;
const WAIT_TIME_BEFORE_PATROLLING = 150;
const NUM_PATROLLABLE_PIXELS_X = TILE_W * 2;
const NUM_PATROLLABLE_PIXELS_Y = TILE_H * 2;
const DETECTION_RADIUS = TILE_W * 3;

function slimeClass()
{
	this.x = 75;
	this.y = 75;
	this.numOfPxMoved = 0;
	this.currentWaitTime = 0;

	this.isPatrollingRight = false;
	this.canPatrol = false;

	/* 
	TODO: use bools (until I figure out a better solution) to make enemy move one direction a time only
	train of thought so far:
	this.isPatrollingEast = false;
	this.isPatrollingWest = false;
	this.isPatrollingNorth = false;
	this.isPatrollingSouth = false;
	*/

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

	//general thoughts: look into making waypoints and letting the enemy itself choose which waypoint to head to and how to get there
	this.move = function()
	{	
		if(!this.isSentryModeOn(WAIT_TIME_BEFORE_PATROLLING))
		{
			if(this.isPatrollingRight)
			{
				this.x += SLIME_SPEED;
				this.numOfPxMoved += SLIME_SPEED;
				if(this.numOfPxMoved >= NUM_PATROLLABLE_PIXELS_X)
				{
					this.isPatrollingRight = !this.isPatrollingRight;
				}
			}
			else if(!this.isPatrollingRight)
			{
				this.x -= SLIME_SPEED;
				this.numOfPxMoved -= SLIME_SPEED;
				if(this.numOfPxMoved <= 0)
				{
					this.isPatrollingRight = !this.isPatrollingRight;
				}
			}
		}
			
		//TODO: implement this.moveIfAble to prevent enemy from traversing non-traversable terrain.

		// var nextX = this.x;
		// var nextY = this.y;

		// var nextTileIndex = getTileIndexAtRowCol(nextX, nextY);
		// var nextTileType = TILE_SNOW;

		// if(nextTileIndex != undefined)
		// {
		// 	nextTileType = worldMap[nextTileIndex];
		// }

		// if(this.moveIfAble(nextTileType))
		// {
		// 	this.x = nextX;
		// 	this.y = nextY;
		// }
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

	//check if slime is acting sentry
	this.isSentryModeOn = function(waitTime)
	{
		if(this.currentWaitTime <= 0)
		{
			this.canPatrol = false;
		}
		else if(this.currentWaitTime >= waitTime)
		{
			this.canPatrol = true;
		}

		if(!this.canPatrol)
		{
			this.currentWaitTime++;
			return true;
		}
		else
		{
			this.currentWaitTime--;
			return false;
		}
	}

	this.draw = function()
	{
		drawBitmapCenteredWithRot(this.bitmap, this.x, this.y, 0.0);
	}
}