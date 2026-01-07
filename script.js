let display = document.querySelector(".display");

function add(value) {
    display.value += value;
}

function clearAll() {
    display.value = "";
}

function del() {
    display.value = display.value.slice(0, -1);
}

function total() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

/* Scientific Functions */

function square() {
    display.value = Math.pow(eval(display.value), 2);
}

function sqrt() {
    display.value = Math.sqrt(eval(display.value));
}

function sin() {
    display.value = Math.sin(eval(display.value));
}

function cos() {
    display.value = Math.cos(eval(display.value));
}

function tan() {
    display.value = Math.tan(eval(display.value));
}

function log() {
    display.value = Math.log10(eval(display.value));
}

function ln() {
    display.value = Math.log(eval(display.value));
}
