const inputText = document.getElementById('inputText');
const uppercaseCheckbox = document.getElementById('uppercaseCheckbox');
const lowercaseCheckbox = document.getElementById('lowercaseCheckbox');
const transformButton = document.getElementById('transformButton');
const resultMessage = document.getElementById('resultMessage');

transformButton.addEventListener('click', function () {
    let transformedText = inputText.value;
    if (uppercaseCheckbox.checked) {
        transformedText = transformedText.toUpperCase();
    }
    if (lowercaseCheckbox.checked) {
        transformedText = transformedText.toLowerCase();
    }
    inputText.value = transformedText;
    resultMessage.textContent = "Resultado: " + transformedText;
});

uppercaseCheckbox.addEventListener('change', function () {
    if (this.checked) {
        lowercaseCheckbox.checked = false;
    }
});

lowercaseCheckbox.addEventListener('change', function () {
    if (this.checked) {
        uppercaseCheckbox.checked = false;
    }
});
