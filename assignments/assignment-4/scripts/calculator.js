function $(id) {
    return document.getElementById(id);
}

function addValue(value) {
    const display = $("display");
    if (display.value === "NaN" || display.value === "Infinity") return;
    display.value += value;
}


function ac() {
    $("calculation").value = "";
    $("display").value = "";
}

function flipSign() {
    const display = $("display")
    display.value = secureEval(display.value) * -1;
}

function percentage() {
    const display = $("display")
    display.value = secureEval(display.value) / 100;
}

function calculate() {
    const display = $("display");
    const calculation = $("calculation");

    const input = display.value;

    try {
        const result = secureEval(input);

        if (!isFinite(result)) {
            display.value = "Infinity";
        } else if (isNaN(result)) {
            display.value = "NaN";
        } else {
            display.value = result;
        }

        calculation.value = input;
    } catch (error) {
        display.value = "NaN";
        calculation.value = input;
    }
}


function secureEval(expression) {
    const safePattern = /^[0-9+\-*/%.() ]+$/;

    if (!safePattern.test(expression)) {
        throw new Error("Invalid characters in expression.");
    }

    try {
        // eslint-disable-next-line no-new-func
        return Function('"use strict"; return (' + expression + ')')();
    } catch (e) {
        throw new Error("Error evaluating expression.");
    }
}

function flashButton(id) {
    const button = $(id);
    if (!button) return;

    button.classList.add("pressed");
    setTimeout(() => {
        button.classList.remove("pressed");
    }, 100);
}

document.addEventListener("keydown", function(event) {
    const key = event.key;

    const keyMap = {
        "0": "zero",
        "1": "one",
        "2": "two",
        "3": "three",
        "4": "four",
        "5": "five",
        "6": "six",
        "7": "seven",
        "8": "eight",
        "9": "nine",
        "+": "add",
        "-": "subtract",
        "*": "multiply",
        "/": "divide",
        "%": "percent",
        ".": "dot",
        "Enter": "equal",
        "Escape": "all_clear",
    };

    // Perform calculator logic
    if ("0123456789+-*/.%".includes(key)) {
        addValue(key);
    } else if (key === "Enter") {
        event.preventDefault();
        calculate();
    } else if (key === "Escape") {
        ac();
    } else if (key === "Backspace") {
        const display = $("display");
        display.value = display.value.slice(0, -1);
    }

    // Apply visual feedback
    const btnId = keyMap[key];
    if (btnId) {
        flashButton(btnId);
    }
});
