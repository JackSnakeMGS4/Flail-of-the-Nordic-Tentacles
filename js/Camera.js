var camPanX = 0.0;
var camPanY = 0.0;
const DIST_BEFORE_X_PAN = 150;
const DIST_BEFORE_Y_PAN = 100;
const CAM_SPEED = 4.0;

function instantCamFollow()
{
	camPanX = player.centerX - canvas.width/2;
	camPanY = player.centerY - canvas.height/2;
}

function cameraFollow()
{
	var camFocusCenterX = camPanX + canvas.width/2;
	var camFocusCenterY = camPanY + canvas.height/2;

	var playerDistFromFocusX = Math.abs(player.centerX - camFocusCenterX);
	var playerDistFromFocusY = Math.abs(player.centerY - camFocusCenterY);

	if(playerDistFromFocusX > DIST_BEFORE_X_PAN)
	{
		if(camFocusCenterX < player.centerX)
			camPanX += CAM_SPEED;
		else
			camPanX -= CAM_SPEED;
	}
	if(playerDistFromFocusY > DIST_BEFORE_Y_PAN)
	{
		if(camFocusCenterY < player.centerY)
			camPanY += CAM_SPEED;
		else
			camPanY -= CAM_SPEED;
	}

	// instantCamFollow();

	if(camPanX < 0)
	{
		camPanX = 0;
	}
	if(camPanY < 0)
	{
		camPanY = 0;
	}

	var maxPanX = W_COLS * TILE_W - canvas.width;
	var maxPanY = W_ROWS * TILE_H - canvas.height;
	if(camPanX > maxPanX)
	{
		camPanX = maxPanX;
	}
	if(camPanY > maxPanY)
	{
		camPanY = maxPanY;
	}
}