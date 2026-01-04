import { pairedParenthesesIsCorrect } from "./task";

const checkedStrElement = document.getElementById('checkedStr');

const responseElement = document.getElementById('response');

checkedStrElement.addEventListener('input', (el) => {
    showResult(pairedParenthesesIsCorrect(el.target.value))
})

function showResult(corrected) {
    if (corrected === true) responseElement.innerHTML = 'Парные скорбки корректы';
    else if (corrected === false) responseElement.innerHTML = 'Парные скорбки не корректы';
    else responseElement.innerHTML = '';
}

[...document.querySelectorAll('.exp')].map(el => {
    const [, expEl, , respEl] = el.childNodes;
    respEl.innerHTML = (pairedParenthesesIsCorrect(expEl.innerHTML));
});