const PLAYER_SPEED = 4.0;

function vikingClass()
{
	this.x = 75;
	this.y = 75;

	this.dirNorth = false;
	this.dirSouth = false;
	this.dirWest = false;
	this.dirEast = false;

	this.setupInput(north,south,west,east)
	{
		this.ctrlNorth = north;
		this.ctrlSouth = south;
		this.ctrlWest = west;
		this.ctrlEast =easth;
	}

	this.draw = function()
	{
		drawBitmapCenteredWithRot(this.bitmap, this.x, this.y, 0.0);
	}
}