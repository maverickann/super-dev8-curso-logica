
function exercicioTres() {
    const nomeFilme = prompt("Digite o nome do filme:");
    const anoLançamento = parseInt(prompt("Digite o ano de lançamento do filme escolhido"));
    const duraçaoDoFilme = parseFloat(prompt("digite a duração do filme "));
    const generoFilme = prompt(" Digite o gênero do filme:");
    const filmeFoiVisto = confirm("Você já viu o filme?");

    let filmeAssitido = "";
    if (filmeFoiVisto === true) {
        filmeAssitido = prompt("Faça um breve resumo do filme");
    } else {
        alert("Sem cultura")
    }

}

function exercicioQuatro() {
    const nomdeProduto = prompt("Digite o nome do produto");
    const preçoUnitario = parseFloat(prompt("Digite o preço unitário:"));
    const quantidade = parseInt(prompt("Digite a quantidade de itens:"));
    let valorTotal = preçoUnitario * quantidade;
    const assinantePremium = confirm(" Você é um Assinante Premium?")

    if (assinantePremium === true) {
        valorTotal * (10 / 100);

        alert
    } else
        alert
}

function exercicioCinco() {
    let indice = 0;
    while (indice < 3) {

        const filmeFavorito = prompt("Fale seu filme favorito:")
        const lançamento = prompt("Diga o ano de lançamento do filme:")
        alert("Filme:" + filmeFavorito + "\nAno:" + lançamento)
        indice + 1;
    }
    alert("Lista de filmes cadastrada com sucesso")
}

function exercicioSeis() {
    let indice = 0;
    let number = 0;
    while (indice < 5) {
        const soma = parseFloat(prompt("Diga 5 números:"))
        let resultado = number + soma;
        indice + 1;

    }
    let media = resultado / 5;
    alert("Soma dos numeros:" + resultado + "\nMedia do numeros:" + media)
}

function exercicioSete() {
    let indice = 0;
    let total = 0;
    while (indice < 6) {
        let valorVendas = parseFloat(prompt("Digite o valor das vendas:"))
        total + valorVendas;
        let comissao = total / 0.5;
        indice + 1;

        alert("Total de vendas :" + total + "\nComissão sobre o total de vendas:" + comissao)
    }
}

function exercicioOito() {
    let indice = 0;
    while (indice < 10) {
        let number = parseInt(prompt("Digite um numero:"))
        if (number / 2 == 0) {
            alert("esse numero é par")
        } else {
            alert("Esse numero é impar")
        }
    }
}

function exercicioNove() {
    let indice = 0;
    let tabuada = 0;
    let number = parseInt(prompt("Digite um numero:"))
    let result = "";
    while (indice < 20) {
        result += number + "x" + tabuada + "=" + (+number * tabuada);

        tabuada + 1;
        indice + 1;
    }
    alert(result);
}

function exercicioDez() {
    let indice = 0;
    let impar = 0;
    let par = 0;
    while (indice < 10) {
        let number = parseInt(prompt("Digite um numero:"))
        if (number / 2 == 0) {
            par ++ ;
        } else {
            impar  ++ ;
        }
    }
    alert("numeros pares:" + par + "\nNumeros impares" + impar)
}

function exerciciOnze() {
    let notas = 0;
    let indice = 0;
    while (indice < 4) {
        notas = parseFloat(prompt("Digite sua nota:"));
        indice + 1;
    }
    let media = soma / 4;
    if (media >= 7) {
        alert("APROVADO ");
    } else { alert("Reprovado") }



}
function exercicioDoze() {
    let indice = 0;
    let total = 0;
    while (indice < 5) {
        total += parseFloat(prompt("Valor do produto:"));
        indice++;
    }
    let desconto = total > 200 ? total * 0.10 : 0;
    alert(
        "Total sem desconto: " + total.toFixed(2) +
        "\nTotal com desconto: " + (total - desconto).toFixed(2)
    );
}
function exercicioTreze() {
    let indice = 0;
    let soma = 0;
    while (indice < 6) {
        soma += parseInt(prompt("Digite a idade:"));
        indice++;
    }
    let media = soma / 6;
    alert("Média das idades: " + media + "\n" + (media >= 18 ? "Maior de idade" : "Menor de idade"));


}
function exercicioQuatorze() {
    let indice = 0;
    let soma = 0;
    let maior = 0;
    let menor = 99999999;
    while (indice < 5) {
        let salario = parseFloat(prompt("Digite o salário:"));
        soma += salario;
        if (salario >= maior){

            maior = salario;
        }
        if(salario<menor){

            menor = salario;
        }  
        indice=i+1;
    }
    let media = soma / 5;
 if (media> 3000) {
    alert("Salarios acima da media:"+maior)
    
 }else {alert("Os salarios estão na media")}
}

function exercicioQuinze() {
    let indice = 0;
    let total = 0;
    while (indice < 4) {
        total += parseFloat(prompt("Digite o valor da conta:"));
        indice++;
    }
    let renda = parseFloat(prompt("Digite sua renda mensal:"));
    let percentual = (total / renda) * 100;
    alert(
        "Total das contas: " + total +
        "\nPercentual da renda: " + percentual + "%" +
        "\n" + (percentual > 50 ? "Orçamento comprometido" : "Orçamento saudável")
    );
}

function exercicioDezesseis() {
    let indice = 0;
    let maior = 0;
    while (indice < 5) {
        let altura = parseFloat(prompt("Digite a altura:"));
        if (altura > maior) maior = altura;
        indice++;
    }
    alert("Maior altura: " + maior);

}

function exercicioDezesete() {
    let indice = 0;
    let menor = 999;
    while (indice < 4) {
        let peso = parseFloat(prompt("Digite o peso:"));
        if (peso < menor) menor = peso;
        indice++;
    }
    alert("Menor peso: " + menor);
}

function exercicioDezoito() {
    let indice = 0;
    let maiorIdade = 0;
    let nomeMaior = "";
    while (indice < 5) {
        let nome = prompt("Nome:");
        let idade = parseInt(prompt("Idade:"));
        if (idade > maiorIdade) {
            maiorIdade = idade;
            nomeMaior = nome;
        }
        indice++;
    }
    alert("Pessoa mais velha: " + nomeMaior + " (" + maiorIdade + ")");

}

function exercicioDezenove() {
    let indice = 0, maior = 0, menor = 999999;
    while (indice < 6) {
        let preco = parseFloat(prompt("Preço do produto:"));
        if (preco > maior) maior = preco;
        if (preco < menor) menor = preco;
        indice++;
    }
    alert("Maior preço: " + maior + "\nMenor preço: " + menor);


}

function exercicioVinte() {
    let indice = 0, maior = 0, nomeMaior = "";
    while (indice < 4) {
        let nome = prompt("Nome do colaborador:");
        let salario = parseFloat(prompt("Salário:"));
        if (salario > maior) {
            maior = salario;
            nomeMaior = nome;
        }
        indice++;
    }
    alert("Maior salário: " + nomeMaior + " - R$ " + maior);

}

function exercicio21() {
    let indice = 0;
    let maior = -999;
    let menor = 999;
    while (indice < 7) {
        let temp = parseFloat(prompt("Digite a temperatura do dia:"));
        if (temp > maior) maior = temp;
        if (temp < menor) menor = temp;
        indice++;
    }
    alert("Maior temperatura: " + maior + "\nMenor temperatura: " + menor);

}

function exercicio22() {
    let indice = 0;
    let menor = 999999;
    let nomeMenor = "";
    while (indice < 5) {
        let nome = prompt("Nome do produto:");
        let preco = parseFloat(prompt("Preço do produto:"));
        if (preco < menor) {
            menor = preco;
            nomeMenor = nome;
        }
        indice++;
    }
    alert("Produto mais barato: " + nomeMenor + " - R$ " + menor);

}

function exercicio23() {
    let indice = 0;
    let crianca = 0, adolescente = 0, adulto = 0, idoso = 0;
    while (indice < 8) {
        let idade = parseInt(prompt("Digite a idade:"));
        if (idade < 12) crianca++;
        else if (idade < 18) adolescente++;
        else if (idade < 60) adulto++;
        else idoso++;
        indice++;
    }
    alert(
        "Crianças: " + crianca +
        "\nAdolescentes: " + adolescente +
        "\nAdultos: " + adulto +
        "\nIdosos: " + idoso
    );
}

function exercicio24() {
    let indice = 0;
    let rep = 0, rec = 0, apr = 0;
    while (indice < 10) {
        let nota = parseFloat(prompt("Digite a nota do aluno:"));
        if (nota < 5) rep++;
        else if (nota < 7) rec++;
        else apr++;
        indice++;
    }
    alert(
        "Reprovados: " + rep +
        "\nRecuperação: " + rec +
        "\nAprovados: " + apr
    );
}

function exercicio25() {
    let indice = 0;
    let ate2000 = 0, ate5000 = 0, acima5000 = 0;
    while (indice < 7) {
        let salario = parseFloat(prompt("Digite o salário:"));
        if (salario <= 2000) ate2000++;
        else if (salario <= 5000) ate5000++;
        else acima5000++;
        indice++;
    }
    alert(
        "Até 2000: " + ate2000 +
        "\n2001 a 5000: " + ate5000 +
        "\nAcima de 5000: " + acima5000
    );
}

function exercicio26() {
    let indice = 0;
    let frio = 0, agradavel = 0, quente = 0;
    while (indice < 6) {
        let temp = parseFloat(prompt("Digite a temperatura:"));
        if (temp < 15) frio++;
        else if (temp <= 25) agradavel++;
        else quente++;
        indice++;
    }
    alert(
        "Frios: " + frio +
        "\nAgradáveis: " + agradavel +
        "\nQuentes: " + quente
    );
}

function exercicio27() {
    let indice = 0;
    let ruim = 0, regular = 0, bom = 0;
    while (indice < 10) {
        let nota = parseInt(prompt("Avaliação (1 a 5)  :"+"\nRealizados:"+(indice+1)+"/10"
        ));
        if (nota <= 2) ruim++;
        else if (nota == 3) regular++;
        else bom++;
        indice++;
    }
    alert(
        "Ruim: " + ruim +
        "\nRegular: " + regular +
        "\nBom: " + bom
    );
}

function exercicio28() {
    let indice = 0;
    let neg = 0, zero = 0, pos = 0;
    while (indice < 8) {
        let num = parseInt(prompt("Digite um número:"));
        if (num < 0) neg++;
        else if (num == 0) zero++;
        else pos++;
        indice++;
    }
    alert(
        "Negativos: " + neg +
        "\nZeros: " + zero +
        "\nPositivos: " + pos
    );
}

function exercicio29() {
    let indice = 0;
    let leve = 0, media = 0, pesada = 0;
    while (indice < 5) {
        let peso = parseFloat(prompt("Peso da encomenda:"));
        if (peso < 2) leve++;
        else if (peso <= 10) media++;
        else pesada++;
        indice++;
    }
    alert(
        "Leves: " + leve +
        "\nMédias: " + media +
        "\nPesadas: " + pesada );
}

function exercicio30() {
    let quantidade = parseInt(prompt("Quantas pelúcias deseja cadastrar?"));
    let indice = 0;
    let mickey = 0;
    let minnie = 0;
    let donald = 0;
    while (indice < quantidade) {
        let personagem = prompt("Personagem (MICKEY/MINNIE/DONALD)");
        if (personagem === "MICKEY") mickey++;
        else if (personagem === "MINNIE") minnie++;
        else if (personagem === "DONALD") donald++;
        indice++;
    }
    alert(
        "Mickey: " + mickey +
        "\nMinnie: " + minnie +
        "\nDonald: " + donald );
}

function exercicio31() {
    let quantidade = parseInt(prompt("Quantidade de clientes:"));
    let indice = 0;
    let credito = 0, debito = 0, dinheiro = 0;

    while (indice < quantidade) {
        let forma = prompt("Forma de pagamento (CRÉDITO/DÉBITO/DINHEIRO)");
        if (forma === "CRÉDITO") credito++;
        else if (forma === "DÉBITO") debito++;
        else if (forma === "DINHEIRO") dinheiro++;
        indice++;
    }

    alert(
        "Crédito: " + credito +
        "\nDébito: " + debito +
        "\nDinheiro: " + dinheiro
    );
}

function exercicio32() {
    let quantidade = parseInt(prompt("Quantidade de ingressos:"));
    let indice = 0;
    let inteira = 0, meia = 0, cortesia = 0;

    while (indice < quantidade) {
        let tipo = prompt("Tipo (INTEIRA/MEIA/CORTESIA)");
        if (tipo === "INTEIRA") inteira++;
        else if (tipo === "MEIA") meia++;
        else if (tipo === "CORTESIA") cortesia++;
        indice++;
    }

    alert(
        "Inteira: " + inteira +
        "\nMeia: " + meia +
        "\nCortesia: " + cortesia
    );
}

function exercicio33() {
    let quantidade = parseInt(prompt("Quantidade de lanches vendidos:"));
    let indice = 0;
    let hamburguer = 0, pizza = 0, hotdog = 0;

    while (indice < quantidade) {
        let tipo = prompt("Tipo (HAMBURGUER/PIZZA/HOTDOG)");
        if (tipo === "HAMBURGUER") hamburguer++;
        else if (tipo === "PIZZA") pizza++;
        else if (tipo === "HOTDOG") hotdog++;
        indice++;
    }

    alert(
        "Hambúrguer: " + hamburguer +
        "\nPizza: " + pizza +
        "\nHotdog: " + hotdog
    );
}

function exercicio34() {
    let quantidade = parseInt(prompt("Quantidade de livros:"));
    let indice = 0;
    let ficcao = 0, estudo = 0, infantil = 0;

    while (indice < quantidade) {
        let cat = prompt("Categoria (FICÇÃO/ESTUDO/INFANTIL)");
        if (cat === "FICÇÃO") ficcao++;
        else if (cat === "ESTUDO") estudo++;
        else if (cat === "INFANTIL") infantil++;
        indice++;
    }

    alert(
        "Ficção: " + ficcao +
        "\nEstudo: " + estudo +
        "\nInfantil: " + infantil
    );
}

function exercicio35() {
    let nome;
    let total = 0;

    while (true) {
        nome = prompt("Digite o nome do personagem (ou 'sair'):");
        if (nome.toLowerCase() === "sair") break;
        alert("Personagem cadastrado: " + nome);
        total++;
    }

    alert("Total de personagens cadastrados: " + total);
}

function exercicio36() {
    let total = 0;
    let rpg = 0;

    while (true) {
        let nome = prompt("Digite o nome do jogo (ou 'sair'):");
        if (nome.toLowerCase() === "sair") break;

        let genero = prompt("Gênero do jogo:");
        if (genero === "RPG") rpg++;

        total++;
    }

    alert(
        "Total de jogos: " + total +
        "\nJogos RPG: " + rpg
    );
}

function exercicio37() {
    let baixo = 0, medio = 0, alto = 0;

    while (true) {
        let nome = prompt("Nome do herói (ou 'sair'):");
        if (nome.toLowerCase() === "sair") break;

        let poder = prompt("Nível de poder (BAIXO/MEDIO/ALTO)");
        if (poder === "BAIXO") baixo++;
        else if (poder === "MEDIO") medio++;
        else if (poder === "ALTO") alto++;
    }

    alert(
        "Poder BAIXO: " + baixo +
        "\nPoder MÉDIO: " + medio +
        "\nPoder ALTO: " + alto
    );
}

function exercicio38() {
    let total = 0;
    let soma = 0;

    while (true) {
        let nome = prompt("Nome da série (ou 'sair'):");
        if (nome.toLowerCase() === "sair") break;

        let nota = parseFloat(prompt("Nota da série (0 a 10):"));
        soma += nota;
        total++;
    }

    let media = total > 0 ? soma / total : 0;
    alert(
        "Séries cadastradas: " + total +
        "\nMédia das notas: " + media
    );
}

function exercicio39() {
    let total = 0;
    let jogou = 0;

    while (true) {
        let item = prompt("Console/Jogo retrô (ou 'sair'):");
        if (item.toLowerCase() === "sair") break;

        let resp = prompt("Já jogou? (SIM/NÃO)");
        if (resp === "SIM") jogou++;

        total++;
    }

    alert(
        "Itens cadastrados: " + total +
        "\nJá jogou: " + jogou
    );
}

function exercicio40() {
    let distancia = parseFloat(prompt("Distância percorrida (km):"));
    let litros = parseFloat(prompt("Consumo em litros:"));
    let opcao = 0;

    while (opcao !== 10) {
        opcao = parseInt(prompt(
            "MENU\n" +
            "1 - Consumo médio\n" +
            "2 - Custo da viagem\n" +
            "3 - Alterar distância\n" +
            "4 - Alterar litros\n" +
            "10 - Sair"
        ));

        if (opcao === 1) {
            alert("Consumo médio: " + (distancia / litros).toFixed(2) + " km/l");
        } else if (opcao === 2) {
            let preco = parseFloat(prompt("Preço do litro:"));
            alert("Custo da viagem: R$ " + (litros * preco).toFixed(2));
        } else if (opcao === 3) {
            distancia = parseFloat(prompt("Nova distância:"));
        } else if (opcao === 4) {
            litros = parseFloat(prompt("Novo consumo em litros:"));
        }
    }
}
function exercicio41() {
    let saldo = parseFloat(prompt("Saldo inicial:"));
    let opcao = 0;

    while (opcao !== 10) {
        opcao = parseInt(prompt(
            "MENU\n" +
            "1 - Depositar\n" +
            "2 - Sacar\n" +
            "3 - Consultar saldo\n" +
            "10 - Sair"
        ));

        if (opcao === 1) {
            saldo += parseFloat(prompt("Valor do depósito:"));
        } else if (opcao === 2) {
            let saque = parseFloat(prompt("Valor do saque:"));
            if (saque <= saldo) saldo -= saque;
            else alert("Saldo insuficiente");
        } else if (opcao === 3) {
            alert("Saldo atual: R$ " + saldo.toFixed(2));
        }
    }

    alert("Saldo final: R$ " + saldo.toFixed(2));
}

function exercicio42() {
    let opcao = 0;

    while (opcao !== 10) {
        opcao = parseInt(prompt(
            "MENU\n" +
            "1 - Celsius → Fahrenheit\n" +
            "2 - Fahrenheit → Celsius\n" +
            "10 - Sair"
        ));

        if (opcao === 1) {
            let c = parseFloat(prompt("Temperatura em Celsius:"));
            alert("Resultado: " + (c * 9 / 5 + 32) + " °F");
        } else if (opcao === 2) {
            let f = parseFloat(prompt("Temperatura em Fahrenheit:"));
            alert("Resultado: " + ((f - 32) * 5 / 9) + " °C");
        }
    }
}

function exercicio43() {
    let opcao = 0;

    while (opcao !== 10) {
        opcao = parseInt(prompt(
            "MENU IMC\n" +
            "1 - Calcular IMC\n" +
            "2 - O que é IMC\n" +
            "10 - Sair"
        ));

        if (opcao === 1) {
            let peso = parseFloat(prompt("Peso:"));
            let altura = parseFloat(prompt("Altura:"));
            let imc = peso / (altura * altura);
            alert("IMC: " + imc.toFixed(2));
        } else if (opcao === 2) {
            alert("IMC é o Índice de Massa Corporal, usado para avaliar o peso.");
        }
    }
}

function exercicio44() {
    let estoque = 0;
    let opcao = 0;

    while (opcao !== 10) {
        opcao = parseInt(prompt(
            "MENU ESTOQUE\n" +
            "1 - Adicionar\n" +
            "2 - Remover\n" +
            "3 - Consultar\n" +
            "10 - Sair"
        ));

        if (opcao === 1) {
            estoque += parseInt(prompt("Quantidade a adicionar:"));
        } else if (opcao === 2) {
            let quantidade = parseInt(prompt("Quantidade a remover:"));
            if (quantidade <= estoque) estoque -= quantidade;
            else alert("Quantidade insuficiente");
        } else if (opcao === 3) {
            alert("Estoque atual: " + estoque);
        }
    }

    alert("Estoque final: " + estoque);
}

function exercicio45() {
    let total = 0;
    let opcao = 0;

    while (opcao !== 10) {
        opcao = parseInt(prompt(
            "MENU LANCHE\n" +
            "1 - Hambúrguer (15)\n" +
            "2 - Pizza (25)\n" +
            "3 - Refrigerante (8)\n" +
            "4 - Ver total\n" +
            "10 - Finalizar"
        ));

        if (opcao === 1) total += 15;
        else if (opcao === 2) total += 25;
        else if (opcao === 3) total += 8;
        else if (opcao === 4) alert("Total parcial: R$ " + total.toFixed(2));
    }

    alert("Total do pedido: R$ " + total.toFixed(2));
}

function exercicio46() {
    let soma = 0, quantidade = 0;
    let opcao = 0;

    while (opcao !== 10) {
        opcao = parseInt(prompt(
            "MENU NOTAS\n" +
            "1 - Cadastrar nota\n" +
            "2 - Ver média\n" +
            "3 - Quantidade de notas\n" +
            "10 - Sair"
        ));

        if (opcao === 1) {
            soma += parseFloat(prompt("Digite a nota:"));
            quantidade++;
        } else if (opcao === 2) {
            alert("Média: " + (quantidade > 0 ? (soma / quantidade) : 0));
        } else if (opcao === 3) {
            alert("Notas cadastradas: " + quantidade);
        }
    }
}

function exercicio47() {
    let ruim = 0, regular = 0, bom = 0;
    let opcao = 0;

    while (opcao !== 10) {
        opcao = parseInt(prompt(
            "MENU PESQUISA\n" +
            "1 - Ruim\n" +
            "2 - Regular\n" +
            "3 - Bom\n" +
            "4 - Ver resumo\n" +
            "10 - Sair"
        ));

        if (opcao === 1) ruim++;
        else if (opcao === 2) regular++;
        else if (opcao === 3) bom++;
        else if (opcao === 4) {
            alert(
                "Ruim: " + ruim +
                "\nRegular: " + regular +
                "\nBom: " + bom
            );
        }
    }

    alert("Pesquisa encerrada!");
}

function exercicio48() {
    let maior = 0, menor = 999999, soma = 0;
    let credito = 0, debito = 0, pix = 0;
    let total = 0;

    while (true) {
        let nome = prompt("Nome do cliente (ou 'sair'):");
        if (nome.toLowerCase() === "sair") break;

        let valor = parseFloat(prompt("Valor da compra:"));
        let forma = prompt("Pagamento (CRÉDITO/DÉBITO/PIX)");

        soma += valor;
        total=total+1;

        if (valor > maior) maior = valor;
        if (valor < menor) menor = valor;

        if (forma === "CRÉDITO") credito++;
        else if (forma === "DÉBITO") debito++;
        else if (forma === "PIX") pix++;
    }

    alert(
        "Maior compra: " + maior +
        "\nMenor compra: " + menor +
        "\nMédia: " + (soma / total).toFixed(2) +
        "\nCrédito: " + credito +
        "\nDébito: " + debito +
        "\nPix: " + pix
    );
}function exercicios49() {

    let indice = 0;
    let quantidadeAlunos = parseInt(prompt("Quantos alunos você deseja cadastrar?"));
    
    let somaIdade = 0;
    let pesoBaixo = 0;
    let pesoNormal = 0;
    let pesoAcima = 0;
    
    let menorImc = 999;
    let maiorImc = 0;
    let nomeMenor = "";
    let nomeMaior = "";

    while (indice < quantidadeAlunos) {

        let nome = prompt("Digite o nome do aluno:");
        let idade = parseInt(prompt("Digite a idade do aluno"));
        somaIdade = somaIdade + idade;

        let peso = parseFloat(prompt("Digite seu peso: "));
        let altura = parseFloat(prompt("Digite sua altura: "));

        let imc = peso / (altura * altura);

        if (imc < menorImc) {
            menorImc = imc;
            nomeMenor = nome;
        }

        if (imc > maiorImc) {
            maiorImc = imc;
            nomeMaior = nome;
        }

        if (imc < 18.5) {
            pesoBaixo++;
        } else if (imc < 25) {
            pesoNormal++;
        } else {
            pesoAcima++;
        }

        indice++;
    }

    let mediaIdade = somaIdade / quantidadeAlunos;

    alert(
        "O aluno com maior IMC é " + nomeMaior + " com IMC de " + maiorImc.toFixed(2) +
        "\nO aluno com menor IMC é " + nomeMenor + " com IMC de " + menorImc.toFixed(2) +
        "\n\nResumo IMC - Alunos" +
        "\n- Abaixo do peso: " + pesoBaixo +
        "\n- Peso normal: " + pesoNormal +
        "\n- Sobrepeso: " + pesoAcima +
        "\n\nA média de idade dos alunos é: " + mediaIdade +
        " de " + quantidadeAlunos + " alunos cadastrados"
    );
}


function exercicio50() {
    let maior = 0;
    let menor = 10;
    let soma = 0;
    let total = 0;
    let filme = 0;
    let serie = 0;
    let anime = 0;

    while (true) {
        let nome = prompt("Nome do título (ou 'sair'):");
        if (nome.toLowerCase() === "sair") break;

        let tipo = prompt("Tipo (FILME/SÉRIE/ANIME)");
        let nota = parseFloat(prompt("Nota (0 a 10):"));

        soma += nota;
        total++;

        if (nota > maior) maior = nota;
        if (nota < menor) menor = nota;

        if (tipo === "FILME") filme++;
        else if (tipo === "SÉRIE") serie++;
        else if (tipo === "ANIME") anime++;
    }

    alert(
        "Maior nota: " + maior +
        "\nMenor nota: " + menor +
        "\nMédia: " + (soma / total) +
        "\nFilmes: " + filme +
        "\nSéries: " + serie +
        "\nAnimes: " + anime
    );
}
