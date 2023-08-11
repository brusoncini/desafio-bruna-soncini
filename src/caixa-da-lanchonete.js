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
      let produtoEncontrado = cardapio.find((produto) => {
        return cardapio.item === produto;
      });

      if (!produtoEncontrado) {
        return "Item inválido!";
      }

      // valor total dos itens

      valorTotal = produto * quantidade;
    }

    // verifica se o pagamento é valido
    if (
      metodoDePagamento !== "dinheiro" &&
      metodoDePagamento !== "credito" &&
      metodoDePagamento !== "debito"
    ) {
      return "Forma de pagamento inválida!";
    }

    // descontos e taxas
    if (metodoDePagamento === "dinheiro") {
      valorTotal = valorTotal - valorTotal * 0.05;
    } else if (metodoDePagamento === "credito") {
      valorTotal = valorTotal + valorTotal * 0.03;
    }

    // "Item extra não pode ser pedido sem o principal".
    if (cardapio.itemExtra === true) {
    }

    // Se não forem pedidos itens
    if (itens === 0) {
      return "Quantidade inválida!";
    }

    // Se a quantidade de itens for zero
    if (itens.length === 0) {
      return "Não há itens no carrinho de compra!";
    }

    return `R$ ${valorTotal.toFixed(2)}`;
  }
}

export { CaixaDaLanchonete };
