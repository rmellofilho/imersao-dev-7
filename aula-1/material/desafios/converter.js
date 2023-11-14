// Função para validar entrada como número
function validarNumero(entrada) {
    const numero = parseFloat(entrada);
    return !isNaN(numero) && isFinite(numero) ? numero : null;
}

// Função para calcular o valor convertido
function calcularValorConvertido(valor, cotacao) {
    return (valor * cotacao).toFixed(2);
}

// Função para converter quilômetros para anos-luz
function converterKmParaAnosLuz(kilometros) {
    const velocidadeLuzKmPorSegundo = 299792.458; // Velocidade da luz em km/s
    const anosLuzPorSegundo = 0.00000000000010570; // Anos-luz por segundo

    const tempoEmAnosLuz = kilometros / (velocidadeLuzKmPorSegundo * anosLuzPorSegundo);
    return tempoEmAnosLuz.toFixed(2);
}

// Função para converter temperaturas entre Fahrenheit, Kelvin e Celsius
function converterTemperatura(temperatura, escalaDe, escalaPara) {
    if (escalaDe === 'Fahrenheit') {
        if (escalaPara === 'Celsius') {
            return ((temperatura - 32) * 5/9).toFixed(2);
        } else if (escalaPara === 'Kelvin') {
            return ((temperatura - 32) * 5/9 + 273.15).toFixed(2);
        }
    } else if (escalaDe === 'Celsius') {
        if (escalaPara === 'Fahrenheit') {
            return ((temperatura * 9/5) + 32).toFixed(2);
        } else if (escalaPara === 'Kelvin') {
            return (temperatura + 273.15).toFixed(2);
        }
    } else if (escalaDe === 'Kelvin') {
        if (escalaPara === 'Celsius') {
            return (temperatura - 273.15).toFixed(2);
        } else if (escalaPara === 'Fahrenheit') {
            return ((temperatura - 273.15) * 9/5 + 32).toFixed(2);
        }
    }

    return null;
}

// Constantes para valores
const escolhaOpcao = prompt(
    "Escolha uma opção:\n1 - Conversor de Moeda\n2 - Conversor de Quilômetros para Anos-luz\n3 - Conversor de Temperaturas\n4 - Exibir valor em Bitcoin"
);
const seuNome = prompt("Insira seu nome:");

if (escolhaOpcao === '1') {
    const valorConverter = prompt("Insira o valor a ser convertido:");
    const cotacaoMoeda = prompt("Insira o valor da moeda:");

    // Validação de entrada
    const valorConverterNumero = validarNumero(valorConverter);
    const cotacaoMoedaNumero = validarNumero(cotacaoMoeda);

    // Verifica se as entradas são válidas
    if (valorConverterNumero !== null && cotacaoMoedaNumero !== null) {
        // Calcula o valor em reais e formata com 2 casas decimais
        const valorConvertido = calcularValorConvertido(valorConverterNumero, cotacaoMoedaNumero);

        // Exibe o resultado formatado usando template literals
        alert(`Olá ${seuNome}, a conversão resultou em R$ ${valorConvertido}`);
    } else {
        alert("Por favor, insira valores numéricos válidos.");
    }
} else if (escolhaOpcao === '2') {
    const distanciaKm = prompt("Insira a distância em quilômetros:");

    // Validação de entrada
    const distanciaKmNumero = validarNumero(distanciaKm);

    // Verifica se a entrada é válida
    if (distanciaKmNumero !== null) {
        // Converte quilômetros para anos-luz
        const tempoEmAnosLuz = converterKmParaAnosLuz(distanciaKmNumero);

        // Exibe o resultado formatado usando template literals
        alert(`Olá ${seuNome}, o tempo necessário para viajar ${distanciaKmNumero} km é de ${tempoEmAnosLuz} anos-luz.`);
    } else {
        alert("Por favor, insira uma distância válida em quilômetros.");
    }
} else if (escolhaOpcao === '3') {
    const temperatura = prompt("Insira a temperatura:");
    const escalaDe = prompt("Insira a escala de temperatura (Fahrenheit, Celsius ou Kelvin):");
    const escalaPara = prompt("Insira a escala desejada (Fahrenheit, Celsius ou Kelvin):");

    // Converte a temperatura entre as escalas
    const temperaturaConvertida = converterTemperatura(parseFloat(temperatura), escalaDe, escalaPara);

    // Verifica se a conversão é possível
    if (temperaturaConvertida !== null) {
        // Exibe o resultado formatado usando template literals
        alert(`Olá ${seuNome}, a temperatura convertida é ${temperaturaConvertida} ${escalaPara}`);
    } else {
        alert("Por favor, insira escalas de temperatura válidas (Fahrenheit, Celsius ou Kelvin).");
    }
} else if (escolhaOpcao === '4') {
    const valorEmBitcoin = prompt("Insira o valor em Bitcoin:");

    // Validação de entrada
    const valorEmBitcoinNumero = validarNumero(valorEmBitcoin);

    // Verifica se a entrada é válida
    if (valorEmBitcoinNumero !== null) {
        // Exibe o resultado formatado usando template literals
        alert(`Olá ${seuNome}, o valor em Bitcoin é ${valorEmBitcoinNumero} BTC.`);
    } else {
        alert("Por favor, insira um valor em Bitcoin válido.");
    }
} else {
    alert("Opção inválida. Por favor, escolha uma opção válida.");
}
