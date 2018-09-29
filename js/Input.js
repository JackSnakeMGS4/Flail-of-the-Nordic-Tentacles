const KEY_W = 87;
const KEY_A = 65;
const KEY_S = 83;
const KEY_D = 68;

var mouseX = 0;
var mouseY = 0;

function setupInput()
{
	canvas.addEventListener('mousemove', updateMousePos);
	document.addEventListener('keydown', keyPressed);
	document.addEventListener('keyup', keyReleased);

	viking.setupInput(KEY_W,KEY_S,KEY_A,KEY_D);
}

function updateMousePos(evt)
{
	var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;

	mouseX = evt.clientX - rect.left - root.scrollLeft;
	mouseY = evt.clientY - rect.top - root.scrollTop;

	//drawtext for mouse pos for debugging purposes and mayber more?
}

function keySet (keyEvent, viking, setTo)
{
	if(keyEvent == viking.ctrlWest)
	{
		viking.goingWest = setTo;
	}
	if(keyEvent == viking.ctrlEast)
	{
		viking.goingEast = setTo;
	}
	if(keyEvent == viking.ctrlNorth)
	{
		viking.goingNorth = setTo;
	}
	if(keyEvent == viking.ctrlSouth)
	{
		viking.goingSouth = setTo;
	}
}

function keyPressed(evt)
{
	keySet(evt.keyCode, viking, true);

	evt.preventDefault();
}

function keyReleased(evt)
{
	keySet(evt.keyCode, viking, false);

	evt.preventDefault();
}