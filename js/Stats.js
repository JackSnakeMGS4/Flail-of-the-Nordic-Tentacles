/*
	NOTE: stats really only need to be checked when doing things like battles, using items that increase them whether permanently or temporarily,
	checking gear requirements, etc.
*/

function statsClass()
{
	//health,magic,strength,agility,vitality,intelligence
	this.hp;
	this.mp;
	this.str;
	this.agl;
	this.vit;
	this.int;

	this.init = function()
	{
		//all characters start at base stats
	}
}