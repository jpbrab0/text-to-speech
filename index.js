// - Jquery + Javascript
const utterance = new SpeechSynthesisUtterance();

utterance.lang = "pt-BR";
// - Função para falar.
function falar() {
	speechSynthesis.speak(utterance);
}
// - Função para parar de falar.
function parar() {
  speechSynthesis.cancel();
}
// - Função para definir o texto a ser falado.
function textoParaFalar() {
    utterance.text = $("input").val();
    falar()
}
// - Quando o botão de falar for acionado.
$('.btn__falar').click(() => { 
    textoParaFalar()
});
// - Quando o botão de parar de falar for acionado.
$('.btn__parar').click(() => {
    parar()
})
let contador = 0
// - Trocando a linguagem a ser falada.
$("a").click(() => {
    if(contador % 2 == 0){
        if($("a").attr("class") == 'pt'){
            $('a').removeClass("pt")
            $("a").addClass("en")
            utterance.lang = 'en-US'
            $("h3").html("Linguagem: Inglês")
            contador++
        }
    } else {
        if($("a").attr("class") == 'en'){
            $('a').removeClass("en")
            $("a").addClass("pt")
            utterance.lang = 'pt-BR'
            $("h3").html("Linguagem: Português")
            contador++
        }
    }
})