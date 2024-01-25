<template>
  <v-card class="new-person" @submit.prevent>
    <v-form class="input-person">
      <v-input v-model="person.name" placeholder="Введите имя" class="name" style="" />
      <v-btn style="width: 140px;" class="btn" @click="addPerson"> Добавить </v-btn>
    </v-form>
    <div class="name-list" v-for="person in persons" v-bind:persons="persons">
      <div class="names">{{ person.name }}</div>
      <div>
        <v-btn class="btn" @click="$emit('deletePerson', person)">Удалить</v-btn>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      person:{
        name: "", 
        wastes:0,
        creditor: "" ,
        credit: 0, 
      },
    };
  },
  props:{
    persons:{
        type: Array,
        required: true,
      }
  },
  methods:{
    addPerson() {
        this.person.id = Date.now();
        this.$emit("add", this.person);
        this.person = {
          name: "", 
        wastes:0,
        creditor: "" ,
        credit: 0, 
        };
      },
  }
};
</script>

<style scoped>
.input-person {
  font-family: Arial;
  margin-top: 20px;
  width: 390px;
  height: 50px;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.name {
  width: 250px;
  border: 1px solid #148f77;
  border-radius: 15px 0px 0px 15px;
  font-family: Arial;
}
.btn {
  width: 110px;
  height: 54px;
  border-radius: 0px 15px 15px 0px;
  font-family: Arial;
}
.name-list{
  margin-top: 20px;
  padding:0;
  display: flex;
}
.names {
  width: 295px;
  height: 50px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #ffffff;
  border: 1px solid #148f77;
  border-radius: 15px;
  font-family: Arial;
}
</style>
  