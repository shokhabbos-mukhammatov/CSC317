// hello.js
const message = "JavaScript";

const displayMessage = (message) => {
    return `Hello, ${message}!`;
};

function showGreeting() {
    const output = document.getElementById("hello-output");
    output.textContent = displayMessage(message);
}