<template>
  <div class="new-product" @submit.prevent>
    <div>
      <form class="input-product">
        <my-input v-model="product.name" placeholder="Введите название" />
        <my-input v-model="product.cost" placeholder="Введите цену" />
      </form>
    </div>
    <div class="users">
      <div>
        <div class="question">Кто платил?</div>
        <div v-for="person in persons" class="checkboxs">
          <input type="radio" class="checkbox" v-model="product.payer" id="person.id" :value="person.name" />
          <lable for="person.id" class="payer">
            {{ person.name }}
          </lable>
        </div>
      </div>
      <div>
        <div class="question">Кто ел/пил?</div>
        <div v-for="person in persons" class="checkboxs">
          <input type="checkbox" class="checkbox" v-model="product.eaters" :value="person.name" />
          <lable class="payer" value="name">
            {{ person.name }}
          </lable>
        </div>
      </div>
    </div>
    <div style="display: flex; justify-content: flex-end">
      <button-main class="btn" @click="createCard">Добавить</button-main>
    </div>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      product: {
        name: "",
        cost: "",
        payer: "",
        eaters: [],
      },
      names: ["Lolo", "2", "3"],
    };
  },
  props: {
    persons: {
      type: Array,
      required: true,
    }
  },

  methods: {
    MarkEater(event) {
    },
    createCard() {
      this.product.id = Date.now();
      this.$emit("create", this.product);
      this.product = {
        name: "",
        cost: "",
        payer: [],
        eaters: [],
      };
    },
  },
};
</script>
  
<style scoped>
.new-product {
  width: 785px;
  font-family: Arial;
}

.input-product {
  margin: 20px 0px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  font-family: Arial;
}

.btn {
  margin: 20px;
  width: 140px;
  height: 50px;
}

.btn:hover {
  background: #148f77;
}

.users {
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-content: center;
  font-family: Arial;
}

.question {
  font-family: Inter;
  font-size: 24px;
  text-align: center;
  font-family: Arial;
}

.checkboxs {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.checkbox {
  height: 30px;
  width: 30px;
  background-color: red;
}

input:checked+lable {
  color: #ffffff;
  background-color: #1abc9c;
  border-radius: 10px;
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
  font-family: Arial;
  font-size: 24px;
  text-transform: uppercase;
}


</style>
  