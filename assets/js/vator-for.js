function exemploJogos() {
    let jogo = [];
    //    for (let i = 0; i < 5; i= i + 1)
    for (let i = 0; i < 5; i += 1) {
        let nomeJogos = prompt("Digite nome de jogos:");
        jogo.push(nomeJogos);

    }
    let textoParaApresentar = "";
    for (let i = 0; i < 5; i += 1) {
        textoParaApresentar += jogo[i] + "\n";
    }
    alert("Jogos:" + "\n" + textoParaApresentar);
}


function calculadora() {

    let numeros = [];
    //terminar a caulculadora
    let escolha = parseInt(prompt("Qual é o calculo que vai ser realizado:" + ""))

    for (let i = 0; i < 4; i += 1) {
        let numero = parseFloat(prompt("Digite um numero:"));

        numeros.push(numero);
    }
    let soma = 0;

    for (let i = 0; i < 4; i += 1) {
        let numero = numeros[i];
        soma = soma + numero;

    }
    alert("Numeros digitados:" + numeros + "\nResultado da soma:" + soma)
}
function calcularFolhasPagamento() {
    let colaboradores = [];
    let auxilios = [];
    let descontos = [];
    let valoresPorHora = [];
    let horasTrabalhadas = [];
    let nomeColaborador = "";
    let quantidadeHorasTrabalhadas = 0;
    let valorPagoPorhora = 0;
    let quantidadeColaboradores = parseInt(prompt("Digite a quantidade de colaboradores que deseja gerar as folhas de pagamento:"))
    let valorDescontos = 0;
    let salarioBrutos = [];
    let valorAuxilio = 0;
    let salarioliquidos = [];

    for (let i = 0; i < quantidadeColaboradores; i += 1) {
        nomeColaborador = prompt("Digite o nome do colaborador:")
        quantidadeHorasTrabalhadas = parseInt(prompt("Horas trabalhadas"));
        valorPagoPorhora = parseFloat(prompt("Digite o valor pago por hora"));
        let temDescontos = confirm("Tem descontos?");
        if (temDescontos === true) {
            valorDescontos = parseFloat(prompt("Digite o valor do desconto:"));

        }
        let temAuxilios = confirm("Tem Auxilio?");
        if (temAuxilios === true) {
            valorAuxilio = parseFloat(prompt("Digite o valor do Auxilios"));
        }

        colaboradores.push(nomeColaborador);
        auxilios.push(valorAuxilio);
        descontos.push(valorDescontos);
        valoresPorHora.push(valorPagoPorhora);
        horasTrabalhadas.push(quantidadeHorasTrabalhadas);
        let textoParaApresentar = "";
    }

    for (let i = 0; i < quantidadeColaboradores; i += 1) {
        const quantidadeHorasTrabalhadas = horasTrabalhadas[i];
        const valorPagoPorhora = valoresPorHora[i];
        let salarioBruto = quantidadeHorasTrabalhadas * valorPagoPorhora;
        salarioBrutos.push(salarioBruto);

    }
    for (let i = 0; i < quantidadeColaboradores; i += 1) {
        let salarioliquido = salarioBrutos[i] - descontos[i] + auxilios;
        salarioliquidos.push(salarioliquido)
    }
    for (let i = 0; i < quantidadeColaboradores; i += 1) {


    }



    for (let i = 0; i < quantidadeColaboradores; i += 1) {

        textoParaApresentar += "👤 Colaborador: " + colaboradores[i] + "\n" +
            "⏱ Horas Trabalhadas: " + horasTrabalhadas[i] + "\n" +
            "💰 Valor por Hora: R$ " + valoresPorHora[i].toFixed(2) + "\n" +
            "💵 Salário Bruto: R$ " + salarioBrutos[i].toFixed(2) + "\n" +
            "➖ Descontos: R$ " + descontos[i].toFixed(2) + "\n" +
            "➕ Auxílio: R$ " + auxilios[i].toFixed(2) + "\n" +
            "✅ Salário Líquido: R$ " + salariosLiquidos[i].toFixed(2) + "\n" +
            "-----------------------------------\n";

    }


    alert(textoParaApresentar);
}
function jogoPalavras() {
    let palavras = ["Roblox", "Free Fire", "GTA"];
    let nomejogador = prompt("Digite seu nome:");
    let quantidadeTentativas = 10;
    while (quantidadeTentativas >= 0) {
        let nomejogo = prompt("Tente adivinhar o nome dos 3 jogos");
        if (palavras.includes(nomejogo)) {
            quantidadeTentativas += 3;

            let indicejogo = palavras.indesOf(nomejogo);
            palavras.splice(indicejogo, 1);
            console.log(palavras);
            alert(`Acertou ${quantidadeTentativas} tentativas restantes`)
        }
        console.log(`quantidade de tentativa:` + quantidadeTentativas + "\npalavras:" + palavras);
        if (quantidadeTentativas <= 0)
            alert("perdeu o jogo");
        break;

    }
}
