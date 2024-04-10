let idades = [];
let opinioes = [];
let qtdMulheres = 0;
let qtdHomens = 0;

function adicionarRespostas() {
    for (let i = 0; i < 45; i++) {
        let idade = parseInt(prompt("Informe a idade da pessoa " + (i + 1) + ":"));
        while (isNaN(idade) || idade < 1 || idade > 99) {
            idade = parseInt(prompt("Idade inválida. Por favor, informe uma idade entre 1 e 99:"));
        }

        let sexo = prompt("Informe o sexo da pessoa " + (i + 1) + " (m para masculino ou f para feminino):").toLowerCase();
        while (sexo !== 'm' && sexo !== 'f') {
            sexo = prompt("Sexo inválido. Por favor, informe 'm' para masculino ou 'f' para feminino:").toLowerCase();
        }

        let opiniao = parseInt(prompt("Informe a opinião da pessoa " + (i + 1) + " (ótimo = 4, bom = 3, regular = 2, péssimo = 1):"));
        while (isNaN(opiniao) || opiniao < 1 || opiniao > 4) {
            opiniao = parseInt(prompt("Opinião inválida. Por favor, informe uma opinião entre 1 e 4:"));
        }

        idades.push(idade);
        opinioes.push(opiniao);

        if (sexo === 'f') {
            qtdMulheres++;
        } else {
            qtdHomens++;
        }
    }

    calcularResultados();
}

function calcularResultados() {
    const totalPessoas = idades.length;
    const totalIdades = idades.reduce((acc, cur) => acc + cur, 0);
    const mediaIdade = totalIdades / totalPessoas;
    document.getElementById('mediaIdade').textContent = mediaIdade.toFixed(2);

    const idadeMaisVelha = Math.max(...idades);
    document.getElementById('idadeMaisVelha').textContent = idadeMaisVelha;

    const idadeMaisNova = Math.min(...idades);
    document.getElementById('idadeMaisNova').textContent = idadeMaisNova;

    const qtdPessimo = opinioes.filter(opiniao => opiniao === 1).length;
    document.getElementById('qtdPessimo').textContent = qtdPessimo;

    const qtdOtimoBom = opinioes.filter(opiniao => opiniao >= 3).length;
    const porcentagemOtimoBom = (qtdOtimoBom / totalPessoas) * 100;
    document.getElementById('porcentagemOtimoBom').textContent = porcentagemOtimoBom.toFixed(2) + "%";

    document.getElementById('qtdMulheres').textContent = qtdMulheres;
    document.getElementById('qtdHomens').textContent = qtdHomens;
}

adicionarRespostas();
