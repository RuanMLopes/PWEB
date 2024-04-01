var escolhaComputador, escolhaUsuario;

escolhaComputador = Math.random();

if(escolhaComputador < 0.33){
    escolhaComputador = "Pedra";
}else if (escolhaComputador < 0.66){
    escolhaComputador = "Papel";
}else{
    escolhaComputador = "Tesoura";
}

escolhaUsuario = prompt("Escolha: Pedra, Papel ou Tesoura.");

if(escolhaComputador === escolhaUsuario){
    alert(  "Escolha do Usuário: " + escolhaUsuario +
            "\nEscolha do Computador: " + escolhaComputador +
            "\n\nEmpate!")
}else if( (escolhaUsuario === 'Pedra' && escolhaComputador === 'Tesoura') ||
    (escolhaUsuario === 'Tesoura' && escolhaComputador === 'Papel') ||
    (escolhaUsuario === 'Papel' && escolhaComputador === 'Pedra')){
        alert(  "Escolha do Usuário: " + escolhaUsuario +
                "\nEscolha do Computador: " + escolhaComputador +
                "\n\nParabéns, você ganhou!")
    }else{
        alert(  "Escolha do Usuário: " + escolhaUsuario +
                "\nEscolha do Computador: " + escolhaComputador +
                "\n\nQue pena, você perdeu!")
    }