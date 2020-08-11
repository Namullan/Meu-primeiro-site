// ---------------- Qual o seu nome? ------------------------

var seuNome = prompt("Qual o seu primeiro nome?");

if(seuNome === "") {
    console.log("Empty name");
}
else {
    $(".welcome-sbt").html("Seja Bem Vindo(a), <span class='seuNome'><em>" + seuNome + "!</em></span>");
}

// -------- Alerta dos botões - conteúdo em desenvolvimento -----

$(".desafio3-btn").click(function() {
    alert("Este conteúdo ainda está em desenvolvimento.")
});

// --------------- Pop-up cards ------------------

$(".erros-popup-card").fadeOut().delay(10).queue(function() {
    $(".erros-popup-card").removeClass("invisible");
    $(".erros-popup-card").dequeue();
});

$(".escurecer-fundo").fadeOut().delay(10).queue(function() {
    $(".escurecer-fundo").removeClass("invisible");
    $(".escurecer-fundo").dequeue();
});

// Dúvidas
$(".duvidas-icon").click(function() {
    $(".erros-popup-card").fadeOut();
    $(".escurecer-fundo").fadeIn();
    $(".duvidas-card").fadeIn();
});

$(".duvidas-btn").click(function() {
    $(".duvidas-card").fadeOut();
    $(".escurecer-fundo").fadeOut();
});

// Desorganização
$(".desorganizacao-icon").click(function() {
    $(".erros-popup-card").fadeOut();
    $(".escurecer-fundo").fadeIn();
    $(".desorganizacao-card").fadeIn();
});

$(".desorganizacao-btn").click(function() {
    $(".desorganizacao-card").fadeOut();
    $(".escurecer-fundo").fadeOut();
});

// Desinteresse
$(".desinteresse-icon").click(function() {
    $(".erros-popup-card").fadeOut();
    $(".escurecer-fundo").fadeIn();
    $(".desinteresse-card").fadeIn();
});

$(".desinteresse-btn").click(function() {
    $(".desinteresse-card").fadeOut();
    $(".escurecer-fundo").fadeOut();
});

// Desmotivação
$(".desmotivacao-icon").click(function() {
    $(".erros-popup-card").fadeOut();
    $(".escurecer-fundo").fadeIn();
    $(".desmotivacao-card").fadeIn();
});

$(".desmotivacao-btn").click(function() {
    $(".desmotivacao-card").fadeOut();
    $(".escurecer-fundo").fadeOut();
});

// ------------------ Back to top button -----------------

var mybutton = $(".back-to-top-btn");
mybutton.fadeOut();

function scrollFunction() {
  if ($("body").scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.fadeIn();
  } else {
    mybutton.fadeOut();
  }
}

window.onscroll = function() {scrollFunction()};

mybutton.click(function() {
    $("html, body").animate({scrollTop: 0}, 500);
});

