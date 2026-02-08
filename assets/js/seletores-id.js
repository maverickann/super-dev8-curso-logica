const botaoLimparCampos = document.getElementById("limpar-campos");
botaoLimparCampos.addEventListener("click", limparCampos);

const botaoProcessar = document.getElementById("processar");
botaoProcessar.addEventListener("click", processarPedido);

const botaoCalcularSoma = document.getElementById("calcular-soma");
botaoCalcularSoma.addEventListener("click", calcularSoma);

const botaoCalcularMedia = document.getElementById("calcular-media");
botaoCalcularMedia.addEventListener("click", calcularMedia);
function limparCampos() {
    let campoPlacaMae=document.getElementById("placa-mae");
    console.log(campoPlacaMae)

    
    let campoPlacaVideo=document.getElementById("placa-video");
    console.log(campoPlacaVideo)

    campoPlacaMae.value="";
    campoPlacaVideo.value="";


    alert("ola mundo")

    
}
function processarPedido() {
    let campoPlacaMae=document.getElementById("placa-mae");
    let campoPlacaVideo=document.getElementById("placa-video");
    alert(campoPlacaMae+" "+campoPlacaVideo);
    
}
function calcularSoma() {
    let campoNumero01=document.getElementById("numero01");
    console.log(campoNumero01);
     let campoNumero02=document.getElementById("numero02");
    console.log(campoNumero02);
    
    let numero01 = parseInt(campoNumero01.value);
    let numero02 = parseInt(campoNumero02.value);
    let soma= numero01 +numero02;

const texto=`Soma: ${soma}`;

 const divrResultadoSoma=document.getElementById("resultado-soma");
    divrResultadoSoma.innerHTML=texto;

}
function calcularMedia() {
    const campoNome=document.getElementById("nome");
    const campoNota1=document.getElementById("nota1");
    const campoNota2=document.getElementById("nota2");
    const campoNota3=document.getElementById("nota3");
let status="";
    let nome =campoNome.value;
    let nota1 = parseFloat(campoNome.value);
    let nota2 = parseFloat(campoNome.value);
    let nota3 = parseFloat(campoNome.value);
    let media =(nota1+nota2+nota3)/3;

if (media>7) {
    status="aprovado"
    
}else{status="reprovado"}
const texto =`aluno:${nome} nota1:${nota1} nota2 ${nota2}nota3${nota3}media${media}status${status}`

    const divResultadoMedia=document.getElementById("resultado-media");
    divResultadoMedia.innerHTML=texto;
}