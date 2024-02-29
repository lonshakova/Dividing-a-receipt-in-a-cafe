<template>
  <div class="total-amount">
    <div class="amount">
      СУММА: <span style="color: #186a3b">{{ amount }}</span>
    </div>
    <v-list>
      <v-list-item v-for="person in personsStore.persons" :key="person.id">
        <v-list-item v-for="creditor in person.creditors" :key="creditor.id">
          <div class="persons">
            {{ person.name }} должен {{ creditor.nameCreditor }} {{ creditor.credit }}
          </div>
        </v-list-item>
      </v-list-item>
    </v-list>
    <v-btn 
    text="Убрать повторения"
    @click="personsStore.removeRepetitions()"
    class="btn"/>
  </div>
</template>

<script>
import { usePersonsStore } from "@/stores/personsStore";
export default {
  setup() {
    const personsStore = usePersonsStore();
    return {
      personsStore
    }
  },
  computed: {
    amount() {
      return this.personsStore.persons.reduce((sum, person) => sum + person.wastes, 0);
    },
  },
};
</script>

<style scoped lang="scss">
.total-amount {
  margin: 10px;
  text-align: center;
}

.amount {
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  line-height: normal;
}

.persons {
  min-width: 250px;
  height: 50px;
  background: #eafaf1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  border: 1px solid black;
  border-radius: 15px;
}

.btn:hover {
  background: #eafaf1;
}
</style>
