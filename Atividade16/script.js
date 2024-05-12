var informacoesCursos = {
    "análise e desenvolvimento de sistemas": {
        nome: "Análise e Desenvolvimento de Sistemas",
        descricao: "Curso focado no desenvolvimento de software.",
        duracao: "4 anos",
        cargaHoraria: "3200 horas"
    },
    "gestão da tecnologia da informação": {
        nome: "Gestão da Tecnologia da Informação",
        descricao: "Curso focado na gestão de tecnologia da informação em empresas.",
        duracao: "3 anos",
        cargaHoraria: "2400 horas"
    },
    "logística": {
        nome: "Logística",
        descricao: "Curso focado em logística e gestão de cadeia de suprimentos.",
        duracao: "3 anos",
        cargaHoraria: "2400 horas"
    },
    "processos metalúrgicos": {
        nome: "Processos Metalúrgicos",
        descricao: "Curso focado em processos metalúrgicos e materiais.",
        duracao: "3 anos",
        cargaHoraria: "2400 horas"
    }
};

function confirmarCurso() {
    var cursoSelecionado = document.getElementById("cursos").value;
    if (cursoSelecionado !== "") {
        var confirmacao = confirm("Você realmente deseja abrir a página do curso de " + informacoesCursos[cursoSelecionado].nome + "?");
        if (confirmacao) {
            abrirJanelaCurso(cursoSelecionado);
        }
    }
}

function abrirJanelaCurso(curso) {
    var largura = 600;
    var altura = 300;
    var left = (screen.width / 2) - (largura / 2);
    var top = (screen.height / 2) - (altura / 2);
    var opcoes = "width=" + largura + ",height=" + altura + ",top=" + top + ",left=" + left;
    var informacoesCurso = informacoesCursos[curso];
    var mensagem = "Nome: " + informacoesCurso.nome + "\n" +
                    "Descrição: " + informacoesCurso.descricao + "\n" +
                    "Duração: " + informacoesCurso.duracao + "\n" +
                    "Carga Horária: " + informacoesCurso.cargaHoraria;
    window.open("", curso, opcoes).document.write("<pre>" + mensagem + "</pre>");
}
