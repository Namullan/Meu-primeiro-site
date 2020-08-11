// H1 changing

function newMindOut () {
    $("h1").fadeOut().delay(1).queue(function() {
        $("h1").text("Creativity");
        $("h1").dequeue();
    });
    $("h1").fadeIn().delay(3000).queue(function () {
        newMindIn();
        $("h1").dequeue();
    });
}

function newMindIn () {
    $("h1").fadeOut().delay(1).queue(function() {
        $("h1").text("New Mind");
        $("h1").dequeue();
    });
    $("h1").fadeIn().delay(3000).queue(function () {
        newMindOut();
        $("h1").dequeue();
    });
}

newMindOut();

// ---------------- Qual o seu nome? ------------------------

var seuNome = prompt("Qual o seu primeiro nome?");

if(seuNome === "") {
    console.log("Empty name");
}
else if (seuNome == null) {
    console.log("null");
}
else {

    var firstChar = seuNome[0];
    var firstCharUp = firstChar.toUpperCase();

    var restName = seuNome.slice(1, seuNome.length);
    var restNameLow = restName.toLowerCase();

    $(".welcome-sbt").html("Seja Bem Vindo(a), <span class='seuNome'><em>" + firstCharUp + restNameLow + "!</em></span>");
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

