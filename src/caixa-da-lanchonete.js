class CaixaDaLanchonete {
  calcularValorDaCompra(metodoDePagamento, itens) {

    // cardapio
    const cardapio = [
      {
        item: "cafe",
        valor: 3.0,
        itemExtra: false,
      },

      {
        item: "chantily",
        valor: 1.5,
        itemExtra: true,
      },
      {
        item: "suco",
        itemExtra: false,
        valor: 6.2,
      },

      {
        item: "sanduiche",
        valor: 6.5,
        itemExtra: false,
      },

      {
        item: "queijo",
        valor: 2.0,
        itemExtra: true,
      },

      {
        item: "salgado",
        valor: 7.25,
        itemExtra: false,
      },

      {
        item: "combo1",
        valor: 9.5,
        itemExtra: false,
      },

      {
        item: "combo2",
        valor: 7.5,
        itemExtra: false,
      },
    ];

    let valorTotal = 0;

    // trata a entrada
    for (let item of itens) {
      const [produto, quantidade] = item.split(",");

      // verifica se o item é valido
      const produtoEncontrado = cardapio.find((produtoInfo) => {
        return produtoInfo.item === produto;
      });

      if (!produtoEncontrado) {
        return "Item inválido!";
      }

      // item extra sem item principal
      if (produtoEncontrado.itemExtra === true) {

        if (!itens.includes('cafe'))
        return "Item extra não pode ser pedido sem o principal";

        if (!itens.includes('sanduiche'))
        return "Item extra não pode ser pedido sem o principal";
      }

      // valor total dos itens
      valorTotal += produtoEncontrado.valor * quantidade;
    }

    // verifica se o pagamento é valido
     const pagamentosAceitos = ["dinheiro", "credito", "debito"]

     const pagamentoEncontrado = pagamentosAceitos.find((pagamento) => {
        return metodoDePagamento === pagamento;
      });

      if (!pagamentoEncontrado) {
        return "Forma de pagamento inválida!";
      }

    // descontos e taxas
    if (metodoDePagamento === "dinheiro") {
      valorTotal -= valorTotal * 0.05;
    } else if (metodoDePagamento === "credito") {
      valorTotal += valorTotal * 0.03;
    }

    // Se não forem pedidos itens
    if (itens.length === 0) {
      return "Não há itens no carrinho de compra!";
    }

    // Se o valor da compra for 0
    if (valorTotal === 0) {
        return "Quantidade inválida!";
      }

    return `R$ ${valorTotal.toFixed(2).replace('.', ',')}`;
  }
}

export { CaixaDaLanchonete };
