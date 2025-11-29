
function solicitarString(){
    let nome = prompt ("Digite seu nome")
    let sobrenome = prompt ("Digite seu sobrenome")

    let nomeSobrenome = nome +" "+ sobrenome;
    alert("Nome: "+nomeSobrenome);



}

function solicitarInt(){
    let numeroCartao =parseInt(prompt("Digite o numero do cartão"));
    let codigoSegurança= parseInt(prompt("Digite o seu Codigo"));
    alert("Numero:"+numeroCartao+ "\nCW:"+codigoSegurança)

}
function solicitarFloat(){
    let saldoBancario = parseFloat(prompt("Digite o saldo Bancario"));
     const saque = parseFloat(prompt("Digite o valor do saque"));

     saldoBancario=saldoBancario - saque;
     alert("Saque realizado:"+saque+"\nSaldo atual:"+saldoBancario)
    

}
function solicitarBoolean(){
    let vencido = confirm ("Produto vencido?");
    alert("Produto vencido:"+vencido)

}
function paciente(){
    let nome=prompt("Digite o noem do paciente:");
    const idade = parseInt (prompt("Digite a idade:"));
    const peso = parseFloat(prompt("difite seu peso:"));
    const possuiPlanoSaude= confirm("Possui plano de saude");
    const cpf =prompt("Digite seu CPF:");
    let planoSaude="";
    if (possuiPlanoSaude) {
        planoSaude=prompt("Digite o nome do seu plano de saude:"
        );
        
    }
    const urgencia = prompt ("Escolha o nivel de Urgência [Migué,Atestado,Dorzinha,Dengue,Dor extrema]");
    let tempoEspera=0;
    if (urgencia ==="Migué"){
        tempoEspera=180;
    }else if(urgencia==="Atestado"){
        tempoEspera=150;
    }else if(urgencia==="Dorzinha"){
        tempoEspera=120;
    }else if(urgencia==="Dengue"){
        tempoEspera=60;
    }else if(urgencia==="Dor Extrema"){
        tempoEspera=30;
    }else{
        alert("Nivel de  Urgencia inexistente");
    }

 alert(
        "📋 FICHA DO PACIENTE\n\n" +
        "Nome: " + nome + "\n" +
        "Idade: " + idade + " anos\n" +
        "Peso: " + peso + " kg\n" +
        "CPF: " + cpf + "\n" +
        "Plano de saúde: " + planoSaude + "\n" +
        "Urgência: " + urgencia + "\n" +
        "Tempo estimado de espera: " + tempoEspera + " minutos"
    );

        
    }
    

