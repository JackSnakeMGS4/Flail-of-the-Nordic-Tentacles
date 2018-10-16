/*
	NOTE: xp really only need to be checked when doing things like battles, using items that increase them whether permanently or temporarily,
	checking gear requirements, etc.
*/

function xpClass()
{
	this.currentLvl;
	this.nextLvl;
	this.currentXp;
	this.nextXp;
	this.xpModifier;

	this.init = function()
	{
		//start everyone at lvl 1
	}
}