function converterStringParaInt() {
    const numeroTexto1 = "19";
    const numero1 = parseInt(numeroTexto1)

    const nummeroTexto2 = "81";
    const numero2 = parseInt(nummeroTexto2)
    const soma = numero1 + numero2;
    alert("Soma:" + soma)
}

function converterStringParaFloat() {
    const valorHora = parseFloat("55.09")

    const quantidadeDias = parseInt("220")

    const valorBruto = valorHora * quantidadeDias;
    alert("Valor Bruto:" + valorBruto)
}