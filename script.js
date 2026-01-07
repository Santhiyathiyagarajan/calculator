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
