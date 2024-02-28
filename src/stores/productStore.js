import { defineStore } from 'pinia'
import { usePersonsStore } from './personsStore';

export const useProductsStore = defineStore({
  id: 'products',
  state: () => ({ products: [] }),
  actions: {
    createCard(product) {
      const personsStore = usePersonsStore();
      this.products.push(product);
      
      const totalPrice = product.cost / (product.eaters.length);
      for (const person of personsStore.persons) {
        if (person.id === product.payer.id) {
          person.wastes += product.cost;
        }
        else {
            const eater = product.eaters.find(eater => eater.id === person.id);
            if (eater) {
              const creditor = person.creditors.find(creditor => creditor.id === product.payer.id);
              if (creditor) {
                creditor.credit += totalPrice;
              } else {
                eater.creditors.push({ id: product.payer.id, nameCred: product.payer.name, credit: totalPrice });
              }
            }
        }
      }
    },
    removeCard(product) {
      const personsStore = usePersonsStore();
      const totalPrice = product.cost / (product.eaters.length);
      for (const person of personsStore.persons) {
        if (person.id === product.payer.id) {
          person.wastes -= product.cost;
        }
        else {
          for (const creditor of person.creditors) {
            if (creditor.id === product.payer.id) {
              creditor.credit -= totalPrice;
              if (creditor.credit === 0) {
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