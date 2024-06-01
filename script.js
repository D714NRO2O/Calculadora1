function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.innerText = display.innerText.slice(0, -1) || '0';
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0' && value !== '.') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function calculateResult() {
    const display = document.getElementById('display');
    const history = document.getElementById('history');
    try {
        const result = eval(display.innerText);
        history.innerHTML += `<div>${display.innerText} = ${result}</div>`;
        display.innerText = result;
    } catch (e) {
        display.innerText = 'Error';
    }
}
