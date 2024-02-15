import { defineStore } from 'pinia'
import { usePersonsStore } from './personsStore';

export const useProductsStore = defineStore({
  id: 'products',
  state: () => ({ products: [] }),
  actions: {
    createCard(product) {
      const personsStore = usePersonsStore();
      this.products.push(product);
      this.NewProductVisible = false;
      const productCost = +product.cost;
      const totalPrice = productCost / (product.eaters.length);
      for (const person of personsStore.persons) {
        if (person.id == product.payer.id) {
          person.wastes = person.wastes + productCost;
        }
        else {
          for (const eater of product.eaters) {
            if (person.id == eater.id) {
              for (const creditor of person.creditors) {
                if (creditor.id == product.payer.id) {
                  creditor.credit = creditor.credit + totalPrice;
                  break;
                }
                else if (creditor.id != product.payer.id) {
                  eater.creditors.push({ id: product.payer.id, nameCred: product.payer.name, credit: totalPrice });
                  break;
                }
              }
              if (person.creditors.length == 0) {
                eater.creditors.push({ id: product.payer.id, nameCred: product.payer.name, credit: totalPrice });
              }
            }
          }
        }
      }
    },
    removeCard(product) {
      const personsStore = usePersonsStore();
      const productCost = +product.cost;
      const totalPrice = productCost / (product.eaters.length);
      for (const person of personsStore.persons) {
        if (person.id == product.payer.id) {
          person.wastes = person.wastes - productCost;
        }
        else {
          for (const creditor of person.creditors) {
            if (creditor.id == product.payer.id) {
              creditor.credit = creditor.credit - totalPrice;
              if (creditor.credit == 0) {
                person.creditors = person.creditors.filter((p) => p.id !== creditor.id);
              }
              break;
            }
          }
        }
      }
      this.products = this.products.filter((p) => p.id !== product.id);
    },
  }
})