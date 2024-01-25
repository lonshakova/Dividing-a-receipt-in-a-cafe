<template>
  <v-container>
    <div class="header-menu">
      <v-btn style="width: 300px" @click="showNewProduct">Добавить продукт</v-btn>
      <v-btn style="width: 300px" @click="showNewPerson">Добавить человека</v-btn>
      <v-btn style="width: 300px" @click="showTotalAmount">Итоговая сумма</v-btn>
        <v-dialog v-model:show="NewPersonVisible"
          ><new-person @add="addPerson" :persons="persons" @deletePerson="deletePerson"></new-person
        ></v-dialog>
        <v-dialog v-model:show="TotalAmountVisible"
          ><total-amount></total-amount
        ></v-dialog>
    </div>
  </v-container>
</template>

<script>

import NewPerson from "@/components/DialogWindows/NewPerson.vue";
import NewProduct from "@/components/DialogWindows/NewProduct.vue";
import TotalAmount from "@/components/DialogWindows/TotalAmount.vue";
export default {
  components: {
    NewPerson,
    NewProduct,
    TotalAmount,
  },
  data: () => ({
    NewProductVisible: true
    }),
  methods: {
    showNewPerson() {
      this.NewPersonVisible = true;
    },
    showNewProduct() {
      this.NewProductVisible = true;
    },
    showTotalAmount() {
      this.TotalAmountVisible = true;
    },
    createCard(product) {
      this.products.push(product);
      this.NewProductVisible = false;
    },
    removeCard(product) {
      this.products = this.products.filter((p) => p.id !== product.id);
    },
    addPerson(person){
      this.persons.push(person);
    },
    deletePerson(person){
      this.persons = this.persons.filter((p) => p.id !== person.id);
    }
  },
};
</script>
<style scoped> 
.header-menu{
  display:flex;
  justify-content: space-around;
}
</style>
