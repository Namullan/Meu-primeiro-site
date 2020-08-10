// Qual o seu nome?

var seuNome = prompt("Qual o seu nome?");
$(".welcome-sbt").html("Seja Bem Vindo(a), <span class='seuNome'><em>" + seuNome + "!</em></span>");

// Alerta dos botões - conteúdo em desenvolvimento

$(".desafio3-btn").click(function() {
    alert("Este conteúdo ainda está em desenvolvimento.")
});

// Pop-up cards

$(".erros-popup-card").fadeOut().delay(10).queue(function() {
    $(".erros-popup-card").removeClass("invisible");
    $(".erros-popup-card").dequeue();
});

// Dúvidas
$(".duvidas-icon").click(function() {
    $(".erros-popup-card").fadeOut();
    $(".duvidas-card").fadeIn();
});

$(".duvidas-btn").click(function() {
    $(".duvidas-card").fadeOut();
});

// Desorganização
$(".desorganizacao-icon").click(function() {
    $(".erros-popup-card").fadeOut();
    $(".desorganizacao-card").fadeIn();
});

$(".desorganizacao-btn").click(function() {
    $(".desorganizacao-card").fadeOut();
});

// Desinteresse
$(".desinteresse-icon").click(function() {
    $(".erros-popup-card").fadeOut();
    $(".desinteresse-card").fadeIn();
});

$(".desinteresse-btn").click(function() {
    $(".desinteresse-card").fadeOut();
});

// Desmotivação
$(".desmotivacao-icon").click(function() {
    $(".erros-popup-card").fadeOut();
    $(".desmotivacao-card").fadeIn();
});

$(".desmotivacao-btn").click(function() {
    $(".desmotivacao-card").fadeOut();
});

