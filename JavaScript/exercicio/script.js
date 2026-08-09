// Aguarda o envio do formulário
document.getElementById("formDesconto").addEventListener("submit", function(event) {

    // Impede o recarregamento da página
    event.preventDefault();

    // Obtém os valores digitados pelo usuário
    const preco = Number(document.getElementById("preco").value);
    const desconto = Number(document.getElementById("desconto").value);

    // =====================================================
    // VALIDAÇÃO DOS DADOS
    // =====================================================

    // Verifica se o preço é válido
    if (isNaN(preco) || preco <= 0) {
        alert("Informe um preço válido maior que zero.");
        return;
    }

    // Verifica se o desconto é válido
    if (isNaN(desconto) || desconto < 0 || desconto > 100) {
        alert("Informe uma porcentagem de desconto entre 0% e 100%.");
        return;
    }

    // =====================================================
    // CÁLCULO
    // =====================================================

    // Calcula o valor do desconto
    const valorDesconto = preco * (desconto / 100);

    // Calcula o preço final
    const precoFinal = preco - valorDesconto;

    // =====================================================
    // FORMATAÇÃO DOS VALORES
    // =====================================================

    const precoFormatado = preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    const descontoFormatado = valorDesconto.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    const precoFinalFormatado = precoFinal.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    // =====================================================
    // CONSOLE.LOG
    // =====================================================

    console.log("===== RESULTADO DO CÁLCULO =====");
    console.log("Preço original:", precoFormatado);
    console.log("Percentual de desconto:", desconto + "%");
    console.log("Valor do desconto:", descontoFormatado);
    console.log("Preço final:", precoFinalFormatado);

    // =====================================================
    // ALERT
    // =====================================================

    alert(
        "Resultado do cálculo:\n\n" +
        "Preço original: " + precoFormatado + "\n" +
        "Valor do desconto: " + descontoFormatado + "\n" +
        "Preço final: " + precoFinalFormatado
    );

});