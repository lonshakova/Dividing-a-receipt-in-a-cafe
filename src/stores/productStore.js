import { defineStore } from 'pinia'
import { usePersonsStore } from './personsStore';

export const useProductsStore = defineStore({
  id: 'products',
  state: () => ({ products: [] }),
  actions: {
    createCard(product) {
      const personsStore = usePersonsStore();
      this.products.push(product);
      product.cost = +product.cost;
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
              eater.creditors.push({ id: product.payer.id, nameCreditor: product.payer.name, credit: totalPrice });
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
          const creditor = person.creditors.find(creditor => creditor.id === product.payer.id);
          if (creditor) {
            creditor.credit -= totalPrice;
            if (creditor.credit === 0) {
              person.creditors = person.creditors.filter((p) => p.id !== creditor.id);
            }
          }
        }
      }
      this.products = this.products.filter((p) => p.id !== product.id);
    },
  }
})