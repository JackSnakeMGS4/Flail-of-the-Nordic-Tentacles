var editor;
var editorLoop;

function useEditorMode()
{
	if(gameIsRunning)
	{
		runEditorInstance();
	}
	else
	{
		runGameInstance();
	}
}

function Editor()
{
	this.grid = new TileGrid();

	this.init = function()
	{
		this.grid.init(17, 22);
	}

	this.update = function()
	{
		this.grid.draw();
		moveCamera(gameIsRunning, this.grid.mapCols, this.grid.mapRows);
		drawText("mouse: " + Math.floor(mouseX/TILE_W) + "," + Math.floor(mouseY/TILE_H), mouseX, mouseY, "red");
		//handle canvas dragging or scrolling
		//check for changes to tiles and reflect them
		//check for saves/deletes
	}

	this.setTile = function()
	{

	}
}

function runEditorInstance()
{
	clearInterval(gameLoop);
	gameIsRunning = !gameIsRunning;

	editor = new Editor();
	editor.init();

	editorLoop = setInterval(editor.update.bind(editor), 1000/fps);
}

function runGameInstance()
{
	clearInterval(editorLoop);

	gameLoop = setInterval(updateAll, 1000/fps);
	gameIsRunning = !gameIsRunning;
	
	editor = null;
}