const SLIME_SPEED = 2.0;
const WAIT_TIME_BEFORE_PATROLLING = 150;
const NUM_PATROLLABLE_PIXELS_X = TILE_W * 2;
const NUM_PATROLLABLE_PIXELS_Y = TILE_H * 2;
const DETECTION_RADIUS = TILE_W * 3;

function slimeClass()
{
	this.centerX = 75;
	this.centerY = 75;
	this.leftEdge;
	this.rightEdge;
	this.topEdge;
	this.bottomEdge ;
	
	this.numOfPxMoved = 0;
	this.currentWaitTime = 0;

	this.isPatrollingRight = false;
	this.canPatrol = false;

	/* 
	TODO: use bools (until I figure out a better solution if it's within my skill level) to make enemy move one direction a time only
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
		this.centerX = this.homeX;
		this.centerY = this.homeY;
	}

	//general thoughts: look into making waypoints and letting the enemy itself choose which waypoint to head to and how to get there
	this.move = function()
	{	
		var nextX = this.centerX;
		var nextY = this.centerY;

		/*TODO: make enemy move three tiles even if it collides with terrain. 
			For example, if it collides with a tree to right and has only traveled two tile measures then it will three to the left
			currently, it only moves two in either directions when it collides but if in the open it will move three right and three left
		*/
		if(!this.isSentryModeOn(WAIT_TIME_BEFORE_PATROLLING))
		{
			if(this.isPatrollingRight)
			{
				nextX += SLIME_SPEED;
				if(this.canMoveToNextTile(nextX, nextY))
				{
					this.numOfPxMoved += SLIME_SPEED;
					if(this.numOfPxMoved >= NUM_PATROLLABLE_PIXELS_X)
					{
						this.isPatrollingRight = !this.isPatrollingRight;
					}
				}	
			}
			else if(!this.isPatrollingRight)
			{
				nextX -= SLIME_SPEED;
				if(this.canMoveToNextTile(nextX, nextY))
				{
					this.numOfPxMoved -= SLIME_SPEED;
					if(this.numOfPxMoved <= 0)
					{
						this.isPatrollingRight = !this.isPatrollingRight;
					}
				}			
			}
		}

		this.leftEdge = this.centerX - this.bitmap.width/2;
		this.rightEdge = this.centerX + this.bitmap.width/2;
		this.topEdge = this.centerY - this.bitmap.height/2;
		this.bottomEdge = this.centerY + this.bitmap.height/2;

		// console.log(this.leftEdge, this.rightEdge, this.topEdge, this.bottomEdge);
	}//end of this.move

	this.battle = function(player)
	{
		/*TODO: find a way to reference enemies; once enemy can detected, check which player edge collide with which enemy edge;
			if collision was player front on enemy front, dmg player; if collision was player front on enemy back or sides then dmg enemy
			THINK OF Ys I and II
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

	this.canMoveToNextTile = function(nextCenterX,nextCenterY)
	{
		var nextTileIndex = getTileIndexAtRowCol(nextCenterX, nextCenterY);
		var nextTileType = TILE_SNOW;

		if(nextTileIndex != undefined)
		{
			nextTileType = worldMap[nextTileIndex];
			if(this.moveIfAble(nextTileType))
			{
				this.centerX = nextCenterX;
				this.centerY = nextCenterY;

				return true;
			}
			else
			{
				this.isPatrollingRight = !this.isPatrollingRight;

				return false;
			}
		}
	}

	this.draw = function()
	{
		drawBitmapCenteredWithRot(this.bitmap, this.centerX, this.centerY, 0.0);
	}
}