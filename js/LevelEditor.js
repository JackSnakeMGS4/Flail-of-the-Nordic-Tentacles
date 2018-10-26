var editor;

function useEditorMode()
{
	if(gameIsRunning)
	{
		clearInterval(gameLoop);
		gameIsRunning = !gameIsRunning;
		editor = new Editor();
	}
	else
	{
		gameLoop = setInterval(updateAll, 1000/fps);
		gameIsRunning = !gameIsRunning;
		editor = null
	}
}

function Editor()
{
	
}