"use strict";

import {Object2D} from "../Object2D.js";
import {Vector2} from "../math/Vector2.js";

/**
 * A DOM object transformed using CSS3D to ver included in the graph.
 *
 * DOM objects always stay on top of everything else, mouse events are not supported for these.
 *
 * Use the normal DOM events for interaction.
 *
 * @param parent Parent DOM element that contains the drawing canvas.
 * @param type Type of the DOM element (e.g. "div", "p", ...)
 */
function DOM(parent, type)
{
	Object2D.call(this);

	/**
	 * DOM element contained by this object.
	 */
	this.element = document.createElement("div");
	this.element.style.transformStyle = "preserve-3d";
	this.element.style.position = "absolute";
	this.element.style.top = "0px";
	this.element.style.bottom = "0px";
	this.element.style.transformOrigin = "0px 0px";
	this.element.style.overflow = "auto";
	
	/**
	 * Size of the DOM element (in world coordinates).
	 */
	this.size = new Vector2(100, 100);

	this.origin.set(50, 50);

	parent.appendChild(this.element);
}

DOM.prototype = Object.create(Object2D.prototype);

DOM.prototype.draw = function(context, viewport)
{
	// CSS trasnformation matrix
	var projection = viewport.matrix.clone();
	projection.multiply(this.globalMatrix);
	this.element.style.transform = projection.cssTransform();

	// Size of the element
	this.element.style.width = this.size.x + "px";
	this.element.style.height = this.size.y + "100px";
};

export {DOM};