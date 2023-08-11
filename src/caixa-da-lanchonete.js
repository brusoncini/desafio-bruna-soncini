class CaixaDaLanchonete {
  calcularValorDaCompra(metodoDePagamento, itens) {
    //cardapio
    const cardapio = [
      {
        item: cafe,
        valor: 3.0,
      },
      {
        item: chantily,
        valor: 1.5,
      },
      {
        item: suco,
        valor: 6.2,
      },
      {
        item: sanduiche,
        valor: 6.5,
      },
      {
        item: queijo,
        valor: 2.0,
      },
      {
        item: salgado,
        valor: 7.25,
      },
      {
        item: combo1,
        valor: 9.5,
      },
      {
        item: combo2,
        valor: 7.5,
      },
    ];

    // formas de pagamento válidas
    const formasDePagamento = ["credito", "debito", "dinheiro"];

    for (let pagamento of formasDePagamento) {
      if (metodoDePagamento !== formasDePagamento) {
        return "Forma de pagamento inválida!";
      }
    }

    //trata a entrada
    for (let item of itens) {
      item.split(",");
    }

    const produto = itens[0];
    const quantidade = Number(itens[1]);

    // valor total dos itens
    let valorTotal;

    for (let compra of compras) {
      valorTotal = produto * quantidade;
    }

    //aplica descontos e taxas
    if (metodoDePagamento === dinheiro) {
      valorTotal = valorTotal - valorTotal * 0.05;
    } else if (metodoDePagamento === credito) {
      valorTotal = valorTotal + valorTotal * 0.03;
    }

    //"Item extra não pode ser pedido sem o principal".

    // "Não há itens no carrinho de compra!"
    if (!itens) {
      return "Não há itens no carrinho de compra!";
    }

    // "Quantidade inválida!"
    if (itens.length === 0) {
      return "Quantidade inválida!";
    }

    // "Item inválido!"

    // "Forma de pagamento inválida!"

    return `R$ ${valorTotal.toFixed(2)}`;
  }
}

export { CaixaDaLanchonete };
