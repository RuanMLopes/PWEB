function Retangulo(base, altura) {
    this.base = base;
    this.altura = altura;

    this.calcularArea = function () {
        return this.base * this.altura;
    }
}

class Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo) {
        this.nomeCorrentista = nomeCorrentista;
        this.banco = banco;
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }

    getNomeCorrentista() {
        return this.nomeCorrentista;
    }

    setNomeCorrentista(nome) {
        this.nomeCorrentista = nome;
    }

    getBanco() {
        return this.banco;
    }

    setBanco(banco) {
        this.banco = banco;
    }

    getNumeroConta() {
        return this.numeroConta;
    }

    setNumeroConta(numero) {
        this.numeroConta = numero;
    }

    getSaldo() {
        return this.saldo;
    }

    setSaldo(saldo) {
        this.saldo = saldo;
    }
}

class ContaCorrente extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, saldoEspecial) {
        super(nomeCorrentista, banco, numeroConta, saldo);
        this.saldoEspecial = saldoEspecial;
    }
}

class ContaPoupanca extends Conta {
    constructor(nomeCorrentista, banco, numeroConta, saldo, juros, dataVencimento) {
        super(nomeCorrentista, banco, numeroConta, saldo);
        this.juros = juros;
        this.dataVencimento = dataVencimento;
    }
}


function mostrarMenu() {
    alert("Menu:\n1. Calcular área do retângulo\n2. Inserir detalhes de duas contas");
}


mostrarMenu();


var escolha = prompt("Escolha uma opção:");

if (escolha === "1") {
    var base = parseFloat(prompt("Digite a base do retângulo:"));
    var altura = parseFloat(prompt("Digite a altura do retângulo:"));

    var meuRetangulo = new Retangulo(base, altura);

    alert("Área do retângulo: " + meuRetangulo.calcularArea());
} else if (escolha === "2") {
    var contas = [];

    for (var i = 0; i < 2; i++) {
        var nomeCorrentista = prompt("Digite o nome do correntista " + (i + 1) + ":");
        var banco = prompt("Digite o nome do banco:");
        var numeroConta = prompt("Digite o número da conta:");
        var saldo = parseFloat(prompt("Digite o saldo da conta:"));

        var tipoConta = prompt("Digite o tipo de conta (1 para Conta Corrente com Saldo Especial, 2 para Conta Poupança com Juros):");

        if (tipoConta === "1") {
            var saldoEspecial = parseFloat(prompt("Digite o saldo especial da conta corrente:"));
            contas.push(new ContaCorrente(nomeCorrentista, banco, numeroConta, saldo, saldoEspecial));
        } else if (tipoConta === "2") {
            var juros = parseFloat(prompt("Digite a taxa de juros da conta poupança (em decimal):"));
            var dataVencimento = prompt("Digite a data de vencimento da conta poupança:");
            contas.push(new ContaPoupanca(nomeCorrentista, banco, numeroConta, saldo, juros, dataVencimento));
        }
    }

    var message = "Dados da conta 1:\nNome do correntista: " + contas[0].getNomeCorrentista() +
        "\nBanco: " + contas[0].getBanco() +
        "\nNúmero da conta: " + contas[0].getNumeroConta() +
        "\nSaldo: " + contas[0].getSaldo() +
        "\n\nDados da conta 2:\nNome do correntista: " + contas[1].getNomeCorrentista() +
        "\nBanco: " + contas[1].getBanco() +
        "\nNúmero da conta: " + contas[1].getNumeroConta() +
        "\nSaldo: " + contas[1].getSaldo();
    alert(message);
} else {
    alert("Opção inválida.");
}
