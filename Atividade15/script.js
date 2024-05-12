function validarFormulario() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var comentario = document.getElementById('comentario').value;
    var pesquisa_sim = document.getElementById('pesquisa_sim');
    var pesquisa_nao = document.getElementById('pesquisa_nao');

    if (nome.length < 10) {
        alert("O nome deve ter pelo menos 10 caracteres");
        return false;
    }

    if (email.indexOf('@') == -1 || email.indexOf('.') == -1) {
        alert("O email deve ser válido (conter '@' e '.'");
        return false;
    }

    if (comentario.length < 20) {
        alert("O comentário deve ter pelo menos 20 caracteres");
        return false;
    }

    if (!pesquisa_sim.checked && !pesquisa_nao.checked) {
        alert("Por favor, selecione se você fez a pesquisa");
        return false;
    }

    var mensagem = "";
    if (pesquisa_sim.checked) {
        mensagem = "Volte sempre a esta página!";
    } else {
        mensagem = "Que bom que você voltou a visitar esta página!";
    }

    alert(mensagem);
    return true;
}

function limparFormulario() {
    document.getElementById("meuForm").reset();
}
