function drawBitmapCenteredWithRot(useBitmap, atX, atY, withAng)
{
	canvasContext.save();
	canvasContext.translate(atX,atY);
	canvasContext.rotate(withAng);
	canvasContext.drawImage(useBitmap, -useBitmap.width*0.5, -useBitmap.height*0.5);
	canvasContext.restore();
}

function colorRect(topLeftX,topLeftY, width,height, color)
{
	canvasContext.fillStyle = color;
	canvasContext.fillRect(topLeftX,topLeftY, width,height);
}