//Forma 1

var Funcionario1 = {
    Matricula: "001",
    Nome: "Joana Darc",
    Funcao: "Desenvolvedora"
};
alert("Matricula = " + Funcionario1.Matricula + " Nome = " + Funcionario1.Nome + " Função = " + Funcionario1.Funcao);

//Forma 2

var Funcionario2 = new Object();
Funcionario2.Matricula = "002";
Funcionario2.Nome = "Jorge Henrique";
Funcionario2.Funcao = "Professor";

alert("Matricula = " + Funcionario2.Matricula + " Nome = " + Funcionario2.Nome + " Função = " + Funcionario2.Funcao);

//Forma 3

function Funcionario(Matricula, Nome, Funcao) {
    this.Matricula = Matricula;
    this.Nome = Nome;
    this.Funcao = Funcao;

    this.MostraDados = function () {
        return "Matricula = " + this.Matricula + " Nome = " + this.Nome + " Função = " + this.Funcao;
    }
}
var Funcionario3 = new Funcionario("123", "Bruno Gomes", "Engenheiro");
alert(Funcionario3.MostraDados());
