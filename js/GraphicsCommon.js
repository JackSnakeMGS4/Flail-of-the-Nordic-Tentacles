function drawBitmapCenteredWithRot(useBitmap, atX, atY, withAng)
{
	canvasContext.save();
	canvasContext.translate(atX,atY);
	canvasContext.rotate(withAng);
	canvasContext.drawImage(useBitmap, -useBitmap.width*0.5, -useBitmap.height*0.5);
	canvasContext.restore();
}

function drawRect(topLeftX,topLeftY, width,height, color)
{
	canvasContext.fillStyle = color;
	canvasContext.fillRect(topLeftX,topLeftY, width,height);
}

function drawCircle(centerX,centerY, radius, color)
{
	canvasContext.fillStyle = color;
	canvasContext.beginPath();
	canvasContext.arc(centerX,centerY, radius, 0, 2*Math.PI, true);
	canvasContext.fill();
}

function drawText(text, x,y, color)
{
	canvasContext.fillStyle = color;
	canvasContext.fillText(text, x,y);
}