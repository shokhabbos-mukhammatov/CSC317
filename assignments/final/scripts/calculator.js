function $(id) {
    return document.getElementById(id);
}

function ac() {
    $("display").value = "";
    $("calculation").value = "";
}

function addValue(value) {
    const display = $("display");
    if (display.value === "NaN" || display.value === "Infinity") return;
    display.value += value;
}

function toggleSign() {
    const display = $("display");
    if (!display.value) return;
    if (display.value.startsWith('-')) {
        display.value = display.value.slice(1);
    } else {
        display.value = '-' + display.value;
    }
}

function percent() {
    const display = $("display");
    if (!isNaN(display.value) && display.value !== "") {
        display.value = parseFloat(display.value) / 100;
    }
}

function secureEval(input) {
    return Function('"use strict"; return (' + input + ')')();
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
            display.value = formatResult(result);
        }
        calculation.value = input;
    } catch (error) {
        display.value = "NaN";
        calculation.value = input;
    }
}

function formatResult(value) {
    if (value.toString().length > 12) {
        return parseFloat(value).toExponential(5);
    }
    return value;
}

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.theme-button');
    const cssTheme = document.getElementById('css-theme');

    function setTheme(theme) {
        let path = 'styles/calculator.css'; // default
        if (theme === 'ai1') path = 'styles/calculator-ai1.css';
        if (theme === 'ai2') path = 'styles/calculator-ai2.css';

        cssTheme.href = path;
        localStorage.setItem('calcTheme', theme);

        buttons.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.theme === theme);
        });
    }

    const saved = localStorage.getItem('calcTheme') || 'default';
    setTheme(saved);

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            setTheme(button.dataset.theme);
        });
    });
});
