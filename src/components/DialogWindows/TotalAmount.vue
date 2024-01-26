<template>
  <div class="total-amount" @submit.prevent>
    <div class="amount">
      СУММА: <span style="color: #186a3b">{{ amount }}</span>
    </div>
    <v-list>
      <v-list-item v-for="person in persons" :key="person.id">
        <v-list-item v-for="creditor in person.creditors" :key="person.id">
          <div>
            {{ person.name }} должен {{ creditor.nameCred }} {{ creditor.credit }}
          </div>
          </v-list-item>
      </v-list-item>
    </v-list>
    <v-btn @click="removeRepetitions">Убрать повторения</v-btn>
  </div>
</template>
  
<script>
export default {
  data() {
    return {

    };
  },
  props: {
    persons: {
      type: Array,
      required: true,
    }
  },
  computed:{
    amount(){
      var sum=0;
      for( var person of this.persons){
        var wastes=+person.wastes;
        sum=sum+wastes;
      }
      return  sum;
    },
  },
  methods:{
    removeRepetitions(){
      this.$emit("removeRepetitions", this.product);
    }
    
  }
};
</script>
  
<style scoped>
.total-amount {
  margin: 10px;
  font-family: "Inter", sans-serif;
  text-align: center;
}

.amount {
  text-align: center;
  font-family: Arial;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.persons {
  margin-top: 12px;
  width: 500px;
  height: 50px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial;
  font-size: 24px;
  font-weight: 400;
  border: 1px solid black;
  border-radius: 15px;
}
</style>
  