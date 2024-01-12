function radians(degrees) {
    return degrees * (Math.PI / 180)
}

function sin(x) {
    return Math.sin(radians(x));
}

function cos(x) {
    return Math.cos(radians(x));
}

function sqrt(x) {
    if (x < 0) {
      return NaN;
    }

    if (x === 0 || x === 1) {
      return x;
    }

    var guess = x / 2;

    for (var i = 0; i < 10; i++) {
      guess = 0.5 * (guess + x / guess);
    }

    return guess;
}

function log(x) {
    if (x <= 0) {
      return NaN;
    }

    var guess = 1;
    var tolerance = 1e-10;

    while (Math.abs((Math.exp(guess) - x) / x) > tolerance) {
      guess -= (Math.exp(guess) - x) / Math.exp(guess);
    }

    return guess;
}

function tilt(x, y) {
    var expression = (log(x) * cos(x * sqrt(y) - sin(y)))
    return expression
}

function raw(x) {
    var y = log(x) * (sin(x**2) + cos(x/2))
    return y
}

function diameter(pi, r) {
    return 2 * pi * r
}

function radius(d) {
    return d / 2
}

class formulas {
    constructor() {
        class volume {
            constructor() {
                function cube(s) {
                    return s ** 3
                }
        
                function parallelepiped(l, w, h) {
                    return l * w * h
                }
        
                function prism(b, h) {
                    return b * h
                }
        
                function cylinder(pi, r, h) {
                    return pi * r ** 2 * h
                }
        
                function pyramid(b, h) {
                    return 1 / 3 * b * h
                }
        
                function sphere(pi, r) {
                    return 4 / 3 * pi * r ** 3 
                }
            }
        }
    }
}

export {
    sin,
    cos,
    log,
    sqrt,
    tilt,
    raw,
    radians,
    radius,
    diameter,
    formulas
}