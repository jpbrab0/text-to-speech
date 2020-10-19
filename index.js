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