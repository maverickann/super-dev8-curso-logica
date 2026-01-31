//var =>Variavel global, ou seja existe em todos os arquivos (imseguro)
//let =>Variavel que possui escopo, ou seja, existe dentro do If,While, function... 
//const =>Variavel que não permite a alteração, ou seja, uma vez que o valor foi definido não sera possivel alterar. tem a mesma caracteristica do let 
//em relaçao ao escopo, existe dentro do if,while, function,fora deixa de exitir(ela morre)
function exemplo01() {

    let frutas = [];

    //adicionando itens no setor
    frutas.push('maça');
    frutas.push('pera');
    frutas.push('tomtante');
    frutas.push('rucula');

    //alterando o valor do vetor
    frutas[2] = "Tomate";

    //Remover "rucula" da lista de frutas ,pq n é fruta
    frutas.splice(3, 1);//3 é a posiçao da rucula
    console.log("tamanho do vetor:" + frutas.length);
    /*Acessando uma posiçao especifica do setor,ou seja
    acessando o valor armazenado naquela posiçao */
    console.log("frutas 1:" + frutas[0]);
    console.log("frutas 2:" + frutas[1]);
    console.log("frutas 3:" + frutas[2]);
}


function exercicio01() {
    let jogo = [];

    jogo.push("Tibia");
    console.log(jogo.length);
    jogo.push("Battlefield 4");
    console.log(jogo.length);
    jogo.push("Metal of honor");
    jogo.push("GTA 6");
    jogo.push("LoL");


    console.log(jogo.length);
    console.log("Nome do jogo:" + jogo[0]);
    console.log("Nome do jogo:" + jogo[1]);
    console.log("Nome do jogo:" + jogo[2]);
    console.log("Nome do jogo:" + jogo[3]);
    console.log("Nome do jogo:" + jogo[4]);

    jogo.splice(5, 1);
    jogo[4] = "GTA VI";
    consolelog(jogo.length);
    console.log("Nome do jogo:" + jogo[0]);
    console.log("Nome do jogo:" + jogo[1]);
    console.log("Nome do jogo:" + jogo[2]);
    console.log("Nome do jogo:" + jogo[3]);
    console.log("Nome do jogo:" + jogo[4]);

}

function exercicio02() {
    let pratos = [];
    pratos.push("Strogonoff");
    pratos.push("Panqueca");
    pratos.push("salada");
    console.log("Nomes dos pratos:" + pratos[0]);
    console.log("Nomes dos pratos:" + pratos[1]);
    console.log("Nomes dos pratos:" + pratos[2]);

    pratos.splice(3, 1);
    console.log(pratos.length);
    pratos.push("Risoto");
    pratos.push("Feijoada")

    console.log("Nome do pratos:" + pratos[0]);
    console.log("Nome do pratos:" + pratos[1]);
    console.log("Nome do pratos:" + pratos[2]);
    console.log("Nome do pratos:" + pratos[3]);
    console.log("Nome do pratos:" + pratos[4]);
    console.log("Nome do pratos:" + pratos[5]);
    console.log("Nome do pratos:" + pratos[6]);
    pratos[2] = "Panqueca de carne"

    console.log(pratos.length);

    console.log("Nome do pratos:" + pratos[0]);
    console.log("Nome do pratos:" + pratos[1]);
    console.log("Nome do pratos:" + pratos[2]);
    console.log("Nome do pratos:" + pratos[3]);
    console.log("Nome do pratos:" + pratos[4]);

}
