//Busca no HTML todos os elementos que tenham o atributo name="fonte" (ex: radios/inputs de tamanho de fonte )
let inputsTamanhoFonte = document.getElementsByName ("fonte");
for (let i = 0; i<inputsTamanhoFonte.lenght;i+=1 ){
    //pega o input da posiçao atual (indice)dentro da lista
    const inputTamanhofonte = inputTamanhofonte [i];
    //define que,quando esse input mudar de valor, a funçao campoFonteAlterado sera executada 
    inputTamanhofonte.onchange = campoFonteAlterado;

}
//Funçao chamada automaticamente quando algum input de fonte mudar (evento"change")
 function campoFonteAlterado(event){
    let tamanho = event.target.value ;
    //pega o input que disparou o evento (por exemplo, 12,16,24)


    //chama a funçao responsavel por aplicar o tamanho da fonte no paragrafo
    alterarTamanhofonte(tamanho)
 }



 const corTexto = document.getElementById("cor-texto");
 corTexto.addEventListener("change",definirCorTexto);
 const tagP = document.getElementsByTagName("p")[0];

 function definirCorTexto(event){
    let campoSelect = event.target ;
    let cor = campoSelect.value;
    tagP.style.color=cor;

 }

 const  tagCorFundo=document.getElementById("cor-fundo");
 
 tagCorFundo.addEventListener("change",definirCorFundo);

 function definirCorFundo(){const corFundo=tagCorFundo.value;
    const body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor=corFundo;

 }

 const imagens = [
    "../image/fotos do mine/mine01.jpg",
    "../image/fotos do mine/mine02.jpg",
    "../image/fotos do mine/mine03.jpg"
 ];
 const imagem = document.getElementById("imagem-mine");
 let indice=0;
 setInterval(()=>{
    let imagemSRC=imagens[indice];
    imagem.setAttribute("src",imagemSRC);
    indice=indice+1;
    if(indice>=3){
        indice=0;
    }


 },1000)