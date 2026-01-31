function converterParaMaiusculo() {
    let texto = "abacate";
    let textoMaiusculo = texto.toUpperCase();
    alert('texto original:${texto}\nTexto maiusculo: ${textoMaiusculo}');

}
function converterParaMinusculo() {
    let texto = "abacate";
    let textominusculo = texto.toLowerCase();
    alert('texto original:${texto}\nTexto minusculo: ${textominusculo}');

}
function removerEspaçoComeço() {
    let texto = "uma frase bem legal";
    let textoSemEpaçoComeço = texto.trimstart();
}
function removerEspaçoFinal() {
    let texto = "uma frase bem legal";
    let textoSemEpaçofinal = texto.trimEnd();
}
function removerEspaçoComeçoFinal() {
    let texto = "uma frase bem legal";
    let textoSemEpaçoComeço = texto.trim();
}
function substituir() {
    let texto = "Lorezzo faltou";
    let newtext = texto.replace("Lorezzo", "Lorenzo");


}
function substituirCaminho() {
    let valorString = "R$1.932.183,92";
    let valorStringNovo = valorString.replace("R$", "").replaceALL(".", "").replace(",", ".");
    let valor = parseFloat(valorStringNovo);
}
function substring() {
    /*31/01/2026
    dia
    mes
    ano*/
    let data = "31/01/2026";
    let dia = data.substring(0, 2);
    let mes = data.substring(3, 5);
    let ano = data.substring(6, 10);
    alert(`Blumenau, ${dia}de ${mes} de ${ano}`);
}
function substringHorario() {

    let horarioAmericano = prompt("Digite o horario no formato");
    let hora = parseInt(horarioAmericano.substring(0, 2));
    let minuto = parseInt(horarioAmericano.substring(3, 5));
    let periodo = parseInt(horarioAmericano.substring(6, 8));
    let horaBrasil =0;
    if (periodo===am) {
        horaBrasil=hora;
    }else{
        horaBrasil=hora+12;
    }
    let horarioBrasil= `${horaBrasil}:${minuto}`;

}
function exemploLength () {
    let texto ="Vingarores guerra infinita";
    let quantidadeDeCaracteres=texto.length;
}
function começaCom () {
    letnomeEmpresa="Blusoft";
    let empresaBlumenau = false;
    if (nomeEmpresa.toLowerCase().startswith) {
        
    }
}
function terminaCom () {
    endswith
}
function contem () {
    .includes
}
function indiceDoCaracter () {
    let hora="23:59";
    //Retornar o indice caracter encontrado,caso não retornar -1
    let indiceDoisPontos=hora.indexOf(":")
    
}
function quebrarString () {
    .split("/ ")
} 
function padstart () {
    
}
function padEnd() {
    
}