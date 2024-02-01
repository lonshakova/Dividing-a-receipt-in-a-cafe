<template>
  <div class="new-product" @submit.prevent>
    <div>
      <v-form class="input-product">
        <v-text-field v-model="product.name" class="input" placeholder="Введите название"></v-text-field>
        <v-text-field v-model="product.cost" class="input" placeholder="Введите цену"></v-text-field>
      </v-form>
    </div>
    <div class="users">
      <div>
        <div class="question">Кто платил?</div>
        <v-list>
          <v-radio-group v-model="product.payer">
            <v-list-item v-for="person in persons" :value="person">
              <v-radio :label="person.name" :value="person" class="payer"></v-radio>
            </v-list-item>
          </v-radio-group>
        </v-list>
      </div>
      
      <div>
        <div class="question">Кто ел/пил?</div>
        <v-list>
      <v-container>
        <v-list-item v-for="person in persons" :value="person">
        <v-checkbox color="eafaf1" :label="person.name" :value="person" class="payer" v-model="product.eaters"></v-checkbox>
      </v-list-item>
      </v-container>
    </v-list>
      </div>
    </div>
    <div style="display: flex; justify-content: flex-end">
      <v-btn class="btn" @click="createCard">Добавить</v-btn>
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
  
<style scoped lang="scss">
.new-product {
  width: 785px;
  font-family: Arial;
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
.input{
  margin: 0px 10px;
}
.btn {
  margin: 20px;
  width: 140px;
  height: 50px;
  &:hover{
    background:#eafaf1;
  }
}


.users {
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-content: center;
  font-family: Arial;
}

.question {
  font-size: 24px;
  text-align: center;
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
}
</style>
  