/**
 * Key is used by Keyboard, Pointer, etc, to represent a key state.
 *
 * @class
*/
function Key()
{
	/**
	 * Indicates if this key is currently pressed.
	 */
	this.pressed = false;

	/**
	 * Indicates if this key was just pressed.
	 */
	this.justPressed = false;
	
	/**
	 * Indicates if this key was just released.
	 */
	this.justReleased = false;
}

Key.DOWN = -1;
Key.UP = 1;
Key.RESET = 0;

Key.prototype.constructor = Key;

/**
 * Update Key status based on new key state.
 */
Key.prototype.update = function(action)
{
	this.justPressed = false;
	this.justReleased = false;

	if(action === Key.DOWN)
	{
		if(this.pressed === false)
		{
			this.justPressed = true;
		}
		this.pressed = true;
	}
	else if(action === Key.UP)
	{
		if(this.pressed)
		{
			this.justReleased = true;
		}
		this.pressed = false;
	}
	else if(action === Key.RESET)
	{
		this.justReleased = false;
		this.justPressed = false;
	}
};

/**
 * Set this key attributes manually.
 */
Key.prototype.set = function(justPressed, pressed, justReleased)
{
	this.justPressed = justPressed;
	this.pressed = pressed;
	this.justReleased = justReleased;
};

/**
 * Reset key to default values.
*/
Key.prototype.reset = function()
{
	this.justPressed = false;
	this.pressed = false;
	this.justReleased = false;
};

export {Key};
