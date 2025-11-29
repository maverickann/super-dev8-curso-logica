// kebak-case
// camelCase
// PascalCase
// snake_case
// SCREAMING_SNAKE_CASE


//Padão de nomenclatura de função em JS é camel case
function exemploVariaveisTexto() {
    console.log("deu boa texto")//string pois tem aspas
    const produto1 = "xbox";
    const produto2 = "Gameboy Color";

    //Concatenado a variavel produto1 com espaço e depois com produto2
    const produtos = produto1 + " " + produto2;

    alert("Produto:" + produtos)
}

function exemploVariaveisInteiro() {
    console.log("deu boa inteiro")

    const numero1 = 18;
    const numero2 = 147;

    const soma = numero1 + numero2;
    alert("Soma: " + soma);


}
function exemploVariaveisFloat() {
    const quantidadeHoras = 10;
    const valorHora = 2.30;
    const salarioBruto = quantidadeHoras * valorHora;
    alert("Salário Bruto =" + " " + salarioBruto);
}
function exemploVariaveisBoolean() {
    //let permite reatribuir o valor da variaveldepois de criada
    //const não permite reatribuir o valor, apenas a leitura (o vinculo é constante)
    let lorenzoFechouAba = false;

    lorenzoFechouAba = true;

    alert("Lorenzo fechou a  aba" + "  " + lorenzoFechouAba)
}
function exemploVariaveis() {
    const destino = "Maceió";
    const quantidadeDias = 20;
    const preçoDiaria = 1300.1;
    let finalizandoCompra = false;

    let valorTotal = quantidadeDias * quantidadeHoras;

    finalizandoCompra = true;

    alert("Destino:" + destino +
        "\nQuantidade de dias:" + quantidadeDias +
        "\nPreço Diaria: " + preçoDiaria +
        "\nFinalizar a compra: " + finalizandoCompra +
        "\nValor Total: R$ " + valorTotal
    );

}
function Charmander() {
    const nome = "Charmander";
    const numero = "0004";
    const descriçao ="A chama em sua cauda demonstra a força de sua energia vital. Se Charmander estiver fraco, a chama também arderá fracamente.";
    const altura = 0.6;
    const peso = 8.5;
    const categoria = "Lizard";
    const habilidades = "Blaze";

     const imc = peso / (altura*altura).toFixed(4);

     
    alert("Nome do Pokemon:"+nome+
        "\nNumero da Pokedex:"+numero+
        "\nDescrição:"+descriçao+
        "\nAltura:"+altura+
        "\nPeso:"+peso+
        "\nCategoria:"+categoria+
        "\nHabilidades:"+habilidades+
        "\nIMC:"+imc
    );
}
function Charmeleon() {
    const nome = "Charmeleon";
    const numero = "0005";
    const descriçao = "Quando balança sua cauda flamejante, a temperatura ao seu redor sobe cada vez mais, atormentando seus oponentes.";
    const altura = 1.10;
    const peso = 19;
    const categoria = "Lizard";
    const habilidades = "Blaze";

     const imc = peso/(altura*altura);
     
    alert("Nome do Pokemon:"+nome+
        "\nNumero da Pokedex:"+numero+
        "\nDescrição:"+descriçao+
        "\nAltura:"+altura+
        "\nPeso:"+peso+
        "\nCategoria:"+categoria+
        "\nHabilidades:"+habilidades+
        "\nIMC:"+imc
    );
}
function Charizard () {
    const nome ="Charizard ";
    const numero = "0006";
    const descriçao ="Se Charizard ficar realmente irritado, a chama na ponta de sua cauda queima em um tom azul claro.";
    const altura =1.70;
    const peso =90.5;
    const categoria ="Flame";
    const habilidades ="Blaze";

    const imc = peso / (altura*altura);

    alert("Nome do Pokemon:"+nome+
        "\nNumero da Pokedex:"+numero+
        "\nDescrição:"+descriçao+
        "\nAltura:"+altura+
        "\nPeso:"+peso+
        "\nCategoria:"+categoria+
        "\nHabilidades:"+habilidades+
        "\nIMC:"+imc
    );
}