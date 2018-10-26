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
	this.tileGrid = new TileGrid();

	this.init = function()
	{
		this.tileGrid.init(17, 22);
	}

	this.update = function()
	{
		this.tileGrid.draw();
		//handle canvas dragging or scrolling
		//check for changes to tiles and reflect them
		//check for saves/deletes
	}
}

function runEditorInstance()
{
	clearInterval(gameLoop);
	gameIsRunning = !gameIsRunning;

	editor = new Editor();
	editor.init();

	editorLoop = setInterval(editor.update, 1000/fps);
}

function runGameInstance()
{
	clearInterval(editorLoop);

	gameLoop = setInterval(updateAll, 1000/fps);
	gameIsRunning = !gameIsRunning;
	
	editor = null;
}