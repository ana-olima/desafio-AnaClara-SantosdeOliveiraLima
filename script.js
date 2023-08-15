let cardapio = {
    cafe: { valor: 3.0, extra: "chantily" },
    chantily: { valor: 1.5 },
    suco: { valor: 6.2 },
    sanduiche: { valor: 6.5, extra: "queijo" },
    queijo: { valor: 2.0 },
    salgado: { valor: 7.25 },
    combo1: { valor: 9.5 },
    combo2: { valor: 7.5 },
  };
  
  let formasDePagamento = {
      dinheiro: 0.95, // 5% de desconto
      debito: 1, // sem desconto
      credito: 1.03, // acréscimo de 3%
    };

function calcularValorDaCompra(formaDePagamento, itens) {
    let total = 0;
    let extras = [];

    if (!itens.length) {
    return "Não há itens no carrinho de compra!";
    }
    
    if (!this.formasDePagamento.hasOwnProperty(formaDePagamento)) {
    return "Forma de pagamento inválida!";
    }

    for (let i = 0; i < itens.length; i++) {
    const [codigo, quantidade] = itens[i].split(",");

    if (quantidade <= 0) {
        return "Quantidade inválida!";
    }

    if (!this.cardapio.hasOwnProperty(codigo)) {
        return "Item inválido!";
    }

    const item = this.cardapio[codigo];

    // se item for extra, coloque na lista de extras e continue o loop
    if (!item.hasOwnProperty('extra')) {
        extras.push({codigo, quantidade});
        continue;
    }

    total += item.valor * quantidade;

    for (let i = 0; i < extras.length; i++) {
        const {codigo, quantidade} = extras[i];
        const extra = this.cardapio[codigo];
  
        // verifica se existe item principal para este extra
        const temPrincipal = itens.some(x => x.startsWith(extra.principal + ","));
  
        if (!temPrincipal) {
          return "Item extra não pode ser pedido sem o principal";
        }
  
        total += extra.valor * quantidade;
      }
  
      // aplicando desconto ou acréscimo com base na forma de pagamento
      total *= this.formasDePagamento[formaDePagamento];
  
      return `R$ ${total.toFixed(2).replace(".", ",")}`;
    }
    
}