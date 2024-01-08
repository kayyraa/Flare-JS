import { mathpot } from "./python";

function sin(x) {
    return Math.sin(x);
}

function cos(x) {
    return Math.cos(x);
}

function sqrt(x) {
    return Math.sqrt(x);
}

function log(x) {
    return Math.log(x);
}

function tilt(x, y) {
    var expression = (log(x) * cos(x * sqrt(y) - sin(y)))
    return expression
}

export { sin, cos, log, sqrt, tilt }