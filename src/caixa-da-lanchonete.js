class CaixaDaLanchonete {
    constructor() {
      //cardapio
      this.cardapio = {
        cafe: 3.00, chantily: 1.50,
        suco: 6.20, sanduiche: 6.50,
        queijo: 2.00, salgado: 7.25,
        combo1: 9.50, combo2: 7.50
      };
      this.extras = ['chantily', 'queijo'];
  
      //formas de pagamento
      this.formasDePagamento = ['dinheiro', 'debito', 'credito'];
    }
  
    calcularValorDaCompra(formaDePagamento, itens) {
      let total = 0;
  
      if (!this.formasDePagamento.includes(formaDePagamento)) {
        return "Forma de pagamento inválida!";
      }
  
      if (itens.length === 0) {
        return "Não há itens no carrinho de compra!";
      }
      
      let temCafe = false;
      let temSanduiche = false;
  
      // Calculando o total e verificando a validade dos itens
      for (let item of itens) {
        let [codigo, quantidade] = item.split(',');
  
        if (!this.cardapio[codigo]) {
          return "Item inválido!";
        }
  
        if (quantidade <= 0) {
          return "Quantidade inválida!";
        }
  
        if (codigo === 'cafe') {
          temCafe = true;
        }
  
        if (codigo === 'sanduiche') {
          temSanduiche = true;
        }
  
        // Adicionando o valor do item ao total
        total += this.cardapio[codigo] * quantidade;
      }
  
      // Verificando a validade dos itens extras
      for (let item of itens) {
        let [codigo,any] = item.split(',');
  
        if (this.extras.includes(codigo)) {
          if (codigo === 'chantily' && !temCafe) {
            return "Item extra não pode ser pedido sem o principal";
          }
  
          if (codigo === 'queijo' && !temSanduiche) {
            return "Item extra não pode ser pedido sem o principal";
          }
        }
      }
  
      // Aplicando descontos ou taxas conforme a forma de pagamento
      if (formaDePagamento === 'dinheiro') {
        total *= 0.95;
      }
  
      if (formaDePagamento === 'credito') {
        total *= 1.03;
      }
  
      // Retornando o total formatado
      return `R$ ${total.toFixed(2).replace('.', ',')}`;
    }
  } 

export { CaixaDaLanchonete };
