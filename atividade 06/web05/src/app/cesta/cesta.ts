import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCesta } from '../model/item-cesta';

@Component({
  imports: [CommonModule],
  selector: 'app-cesta',
  styleUrl: './cesta.css',
  templateUrl: './cesta.html',
})
export class Cesta {
  lista: ItemCesta[] = [
    {
      "produto": {
        "codigo": 1,
        "nome": "Martelo de Unha 25mm",
        "descritivo": "Martelo com cabo de madeira e cabeça de aço, ideal para trabalhos gerais.",
        "quantidade": 25,
        "valor": 39.90,
        "promo": 29.00,
        "destaque": 1
      },
      "quantidade": 2,
      "valorUnitario": 29.00
    },
    {
      "produto": {
        "codigo": 2,
        "nome": "Chave de Fenda 6x150mm",
        "descritivo": "Chave de fenda com ponta resistente e cabo ergonômico.",
        "quantidade": 40,
        "valor": 18.50,
        "promo": 0,
        "destaque": 0
      },
      "quantidade": 1,
      "valorUnitario": 18.50
    },
    {
      "produto": {
        "codigo": 8,
        "nome": "Furadeira de Impacto 650W",
        "descritivo": "Furadeira elétrica de impacto com controle de velocidade e mandril de 13mm.",
        "quantidade": 10,
        "valor": 289.90,
        "promo": 250.00,
        "destaque": 1
      },
      "quantidade": 1,
      "valorUnitario": 250.00
    }
  ];

  remover(item: ItemCesta): void {
    if (confirm("Deseja realmente remover \"" + item.produto.nome + "\" da cesta?")) {
      this.lista = this.lista.filter(i => i !== item);
    }
  }

  subtotal(item: ItemCesta): number {
    return item.quantidade * item.valorUnitario;
  }

  total(): number {
    let soma = 0;
    for (let item of this.lista) {
      soma += this.subtotal(item);
    }
    return soma;
  }

  totalItens(): number {
    let soma = 0;
    for (let item of this.lista) {
      soma += item.quantidade;
    }
    return soma;
  }
}
