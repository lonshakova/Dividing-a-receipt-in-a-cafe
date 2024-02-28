<template>
  <div class="new-product">
    <v-form class="input-product">
      <v-text-field 
      v-model="product.name" 
      class="input" 
      placeholder="Введите название" />
      <v-text-field 
      type="number" 
      v-model="product.cost" 
      class="input" 
      placeholder="Введите цену" />
    </v-form>
    <div class="users">
      <div>
        <div class="question">Кто платил?</div>
        <v-list>
          <v-radio-group v-model="product.payer">
            <v-list-item 
            v-for="person in personsStore.persons" 
            :key="person.id" 
            :value="person">
              <v-radio 
              :label="person.name" 
              :value="person" 
              class="payer" />
            </v-list-item>
          </v-radio-group>
        </v-list>
      </div>

      <div>
        <div class="question">Кто ел/пил?</div>
        <v-list>
          <v-container>
            <v-list-item 
            v-for="person in personsStore.persons" 
            :key="person.id" 
            :value="person">
              <v-checkbox 
              :label="person.name" 
              :value="person" 
              class="payer" 
              v-model="product.eaters" />
            </v-list-item>
          </v-container>
        </v-list>
      </div>
    </div>
    <div style="display: flex; justify-content: flex-end">
      <v-btn 
      text="Добавить"
      class="btn" 
      @click="createCard" 
      :disabled="formIsEmpty"/>
    </div>
  </div>
</template>

<script>
import { usePersonsStore } from "@/stores/personsStore";
import { useProductsStore } from "@/stores/productStore";
export default {
  setup() {
    const personsStore = usePersonsStore();
    const productStore = useProductsStore();
    return {
      personsStore,
      productStore
    }
  },
  data() {
    return {
      product: {
        name: "",
        cost: 0,
        payer: "",
        eaters: [],
      },
    };
  },
  methods: {
    createCard() {
      this.product.id = Date.now();
      this.productStore.createCard(this.product);
      this.product = {
        name: "",
        cost: 0,
        payer: "",
        eaters: [],
      };
    },
  },
  computed: {
    formIsEmpty() {
      return (this.product.name === '' || this.product.cost === '' || this.product.payer === '' || this.product.eaters.length === 0)
    }
  }
};
</script>

<style scoped lang="scss">
.new-product {
  width: 785px;
}

.input-product {
  margin: 20px 0px;
  padding: 20px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
}

.input {
  margin: 0px 10px;
  width: 100px;
}

.btn {
  margin: 20px;
  width: 140px;
  height: 50px;

  &:hover {
    background: #eafaf1;
  }
}

.users {
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-content: center;
  color: black;
}

.question {
  font-size: 24px;
  text-align: center;
}

.payer {
  height: 50px;
  width: 150px;
  border: 1px solid #148f77;
  border-radius: 15px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  text-transform: uppercase;
  color: black;
}
</style>
