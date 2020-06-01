import {GradientStyle} from "./GradientStyle";
import {Style} from "./Style";

/**
 * Radial gradient interpolates colors from a point to another point around up to a starting and finishing radius value.
 *
 * If the start and end point are the same it interpolates around the starting and ending radius forming a circle. Outside of the radius the color is solid.
 *
 * The get method returns a CanvasGradient https://developer.mozilla.org/en-US/docs/Web/API/CanvasGradient when generated.
 *
 * @class
 * @extends {GradientStyle}
 */
function RadialGradientStyle()
{
    GradientStyle.call(this);

    /**
     * The coordinates of the starting circle of the gradient.
     *
     * @type {Vector2}
     */
    this.start = new Vector2(0, 0);

    /**
     * The radius of the starting circle.
     *
     * @type {number}
     */
    this.startRadius = 10;

    /**
     * The coordinates of the ending circle of the gradient.
     *
     * @type {Vector2}
     */
    this.end = new Vector2(0, 0);

    /**
     * The radius of the ending circle.
     *
     * @type {number}
     */
    this.endRadius = 50;
}

RadialGradientStyle.prototype = Object.create(GradientStyle.prototype);
Style.register(RadialGradientStyle, "RadialGradient");

RadialGradientStyle.prototype.get = function(context)
{
    return context.createRadialGradient(this.start.x, this.start.y, this.startRadius, this.end.x, this.end.y, this.endRadius);
};

RadialGradientStyle.prototype.serialize = function ()
{
    return {
        type: "RadialGradient"
    };
};

RadialGradientStyle.prototype.parse = function (data)
{
    // TODO <ADD CODE HERE>
};


export {RadialGradientStyle};
