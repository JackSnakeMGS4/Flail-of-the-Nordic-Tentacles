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

	//setup inputs for player
}

function updateMousePos(evt)
{
	var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;

	mouseX = evt.clientX - rect.left - root.scrollLeft;
	mouseY = evt.clientY - rect.top - root.scrollTop;

	//drawtext for mouse pos for debugging purposes and mayber more?
}

function keySet (keyEvent, setTo)
{
	// if(keyEvent.keyCode == player.ctrlKLeft)
	// {
	// 	player.keyHeld_dirLeft = setTo;
	// }
	// if(keyEvent.keyCode == player.ctrlKRight)
	// {
	// 	player.keyHeld_dirRight = setTo;
	// }
	// if(keyEvent.keyCode == player.ctrlKUp)
	// {
	// 	player.keyHeld_dirUp = setTo;
	// }
	// if(keyEvent.keyCode == player.ctrlKDown)
	// {
	// 	player.keyHeld_dirDown = setTo;
	// }
}

function keyPressed(evt)
{
	keySet(evt, true);

	evt.preventDefault();
}

function keyReleased(evt)
{
	keySet(evt, false);

	evt.preventDefault();
}