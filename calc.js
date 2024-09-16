function calcularImpostos() {
    const produtoValor = parseFloat(document.getElementById("produtoValor").value);
    const freteValor = parseFloat(document.getElementById("freteValor").value);
    const pesoProduto = parseFloat(document.getElementById("pesoProduto").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const largura = parseFloat(document.getElementById("largura").value);
    const comprimento = parseFloat(document.getElementById("comprimento").value);
    const estadoICMS = parseFloat(document.getElementById("estadoDestino").value);

    const volume = altura * largura * comprimento;
    const custoFreteExtra = (pesoProduto * 0.5) + (volume / 5000);
    const freteTotal = freteValor + custoFreteExtra;
    const valorTotal = produtoValor + freteTotal;
    const impostoImportacao = valorTotal * 0.60;
    const baseICMS = valorTotal + impostoImportacao;
    const icms = baseICMS * (estadoICMS / 100);
    const taxaDespacho = 15;
    const totalImpostos = impostoImportacao + icms + taxaDespacho;

    document.getElementById("resultado").innerHTML = `
        <p><strong>Valor Total (Produto + Frete):</strong> R$ ${valorTotal.toFixed(2)}</p>
        <p><strong>Imposto de Importação:</strong> R$ ${impostoImportacao.toFixed(2)}</p>
        <p><strong>ICMS (${estadoICMS}%):</strong> R$ ${icms.toFixed(2)}</p>
        <p><strong>Taxa de Despacho Postal:</strong> R$ ${taxaDespacho.toFixed(2)}</p>
        <p><strong>Total de Impostos:</strong> R$ ${totalImpostos.toFixed(2)}</p>
    `;
}
