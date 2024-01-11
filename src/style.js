function long_blur(object, delay, lifetime) {
    setTimeout(() => {
        var x = parseInt(object.style.left || 0);
        var y = parseInt(object.style.top || 0);
        var w = object.clientWidth;
        var h = object.clientHeight;
        let blur_part = document.createElement("div");
        blur_part.style.width = w;
        blur_part.style.height = h;
        blur_part.style.position = "fixed";
        blur_part.style.background = "rgba(0, 0, 0, 0.1)";
        blur_part.style.top = object.style.top;
        blur_part.style.left = object.style.left;
        document.body.appendChild(blur_part);
        setTimeout(() => {
            var v = 1
            var s = 0.25
            blur_part.style.opacity -= s;
            if (blur_part.style.opacity == v) {
                blur_part.remove();
            }
        }, lifetime);
        long_blur(object, delay, lifetime)
    }, delay);
}

function add_blur(object, amount) {
    object.style.filter = `blur(${amount}px)`;
}

export { long_blur, add_blur }