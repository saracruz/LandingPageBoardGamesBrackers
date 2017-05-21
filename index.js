var buttonHome = document.querySelector("header button.home");
var buttonJogos = document.querySelector("header button.jogos");
var buttonFinancie = document.querySelector("header button.financie");
var buttonContato = document.querySelector("header button.contato");

adicionarEventoAncora(buttonHome, "header");
adicionarEventoAncora(buttonJogos, "exemplos");
adicionarEventoAncora(buttonFinancie, "etapas");
adicionarEventoAncora(buttonContato, "footer");

function adicionarEventoAncora(button, idPosicao) {
    button.addEventListener("click", function(){
        document.getElementById(idPosicao).scrollIntoView();
    });
}