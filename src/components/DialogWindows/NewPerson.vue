<template>
  <v-card class="new-person">
    <v-form class="input-person">
      <v-text-field 
      v-model="person.name" 
      placeholder="Введите имя" 
      class="name" />
      <v-btn 
      text="Добавить"
      class="btn" 
      @click="addPerson"/> 
    </v-form>
    <div 
    lines 
    class="name-list" 
    v-for="person in personsStore.persons" 
    :key="person.id">
      <v-list-item class="names">{{ person.name }}</v-list-item>
      <div>
        <v-btn 
        block 
        text="Удалить"
        rounded="lg" 
        class="btn" 
        @click="personsStore.deletePerson(person)"/>
      </div>
    </div>
  </v-card>
</template>

<script>
import { usePersonsStore } from "@/stores/personsStore";
export default {
  setup() {
    const personsStore = usePersonsStore();
    return {
      personsStore,
    }
  },
  data() {
    return {
      person: {
        name: "",
        wastes: 0,
        creditors: []
      },
    };
  },
  methods: {
    addPerson() {
      this.person.id = Date.now();
      this.personsStore.addPerson(this.person);
      this.person = {
        name: "",
        wastes: 0,
        creditors: []
      };
    },
  }
};
</script>

<style scoped lang="scss">
.input-person {
  margin: 0;
  width: 401px;
  height: 50px;
  display: flex;
  align-items: center;
  flex-direction: row;
}

.btn {
  height: 100%;

  &:hover {
    background: #eafaf1;
  }
}

.name {
  height: 100%;
}

.name-list {
  margin-top: 20px;
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
  border: 1px solid #000000;
  border-radius: 15px;
  font-family: Arial;
}
</style>
