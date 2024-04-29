function maiorNumero(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

function ordemCrescente(n1, n2, n3) {
    return [n1, n2, n3].sort((a, b) => a - b);
}

function ehPalindromo(str) {
    const upperCaseStr = str.toUpperCase().replace(/\s/g, '');
    const reversedStr = upperCaseStr.split('').reverse().join('');
    return upperCaseStr === reversedStr;
}

function tipoTriangulo(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c) {
            return "Equilátero";
        } else if (a === b || a === c || b === c) {
            return "Isósceles";
        } else {
            return "Escaleno";
        }
    } else {
        return "Não forma um triângulo";
    }
}

//função 1:

const num1 = parseFloat(prompt("Digite o primeiro número: "));
const num2 = parseFloat(prompt("Digite o segundo número: "));
const num3 = parseFloat(prompt("Digite o terceiro número: "));

alert("O maior numero é: " + maiorNumero(num1, num2, num3));

//função 2:

const n1 = parseFloat(prompt("Digite o primeiro número: "));
const n2 = parseFloat(prompt("Digite o segundo número: "));
const n3 = parseFloat(prompt("Digite o terceiro número: "));

alert("Números na ordem crescente: " + ordemCrescente(n1, n2, n3));

//função 3:

const str = prompt("Digite uma palavra ou frase: ");
alert(str + " É palindormo? " + ehPalindromo(str));

//função 4:

const a = parseFloat(prompt("Digite o primeiro lado do triângulo: "));
const b = parseFloat(prompt("Digite o segundo lado do triângulo: "));
const c = parseFloat(prompt("Digite o terceiro lado do triângulo: "));

alert("Tipo de triangulo: " + tipoTriangulo(a, b, c));
