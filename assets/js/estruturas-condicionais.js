function exemploBasico(){
    let idade = parseInt (prompt("qual é sua idade"))

    //Operadores  Relacionais
    //==  igual valor
    //=== igual valor e tipo
    //>   maior
    //>=  maior ou igual
    //<   menor
    //<=  menor ou igual
    //!=  diferente


    if(idade < 18){
        alert("Menor de idade")
    }else if (idade > 65){
        alert("Idoso")
        
    }else { alert("adulto") }
}
function exemploE (){
    
    let nivel = 8;
     if (nivel > 0 && nivel <10 ){
        alert("elo bronze")
     }
}
function exemploOu(){
    let idade =30 ;
    let estudante= true;
    if ( idade <18 || estudante == true){
        alert( "Pode comprar meio ingresso")
    }else{
        alert("Não pode comprar meio ingresso")
    }

}
function somarNumeros() {
    let soma=0;
    const numero1 = parseInt(prompt("digite um numero"));
    soma=soma+numero1;

     const numero2 = parseInt(prompt("digite um numero"));
    soma=soma+numero2;

     const numero3 = parseInt(prompt("digite um numero"));
    soma=soma+numero3;

     const numero4 = parseInt(prompt("digite um numero"));
    soma=soma+numero4;
    
    const media = soma/4;
    alert("Soma:"+soma+"\nMédia:"+media)
}