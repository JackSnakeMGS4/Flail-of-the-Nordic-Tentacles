function TileGrid()
{
	this.map;
	this.mapRows;
	this.mapCols;
	this.tileType = TILE_SNOW;

	this.init = function(rows, cols)
	{
		this.map = new Array(rows * cols);
		this.mapRows = rows;
		this.mapCols = cols;
		this.reset(this.tileType);
	}

	this.reset = function(tileType)
	{
		for(var i = 0; i < this.map.length; i++)
		{
			this.map[i] = tileType;
		}
	}

	this.draw = function()
	{
		
	}
}