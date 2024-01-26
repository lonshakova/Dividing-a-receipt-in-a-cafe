<template>
  <v-card class="new-person" @submit.prevent>
    <v-form class="input-person">
      <v-text-field v-model="person.name" placeholder="Введите имя" class="name" style=""></v-text-field>
      <v-btn style="width: 140px;" class="btn" @click="addPerson"> Добавить </v-btn>
    </v-form>
    <div lines class="name-list" v-for="person in persons" v-bind:persons="persons">
      <v-list-item class="names">{{ person.name }}</v-list-item>
      <div>
        <v-btn block rounded="lg" class="btn" @click="$emit('deletePerson', person)">Удалить</v-btn>
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
        creditors:[]
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
        creditors:[]
        };
      },
  }
};
</script>

<style scoped>
.input-person {
  margin: 20px;
  width: 390px;
  height: 50px;
  display: flex;
  align-items: center;
  flex-direction: row;
}
.name {
  width: 250px;
  height: 60px;
}
.btn {
  width: 110px;
  height: 60px;

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
  