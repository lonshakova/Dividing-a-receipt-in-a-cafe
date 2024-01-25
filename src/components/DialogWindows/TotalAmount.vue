<template>
    <div class="total-amount" @submit.prevent>
      <div class="amount">
        СУММА: <span style="color: #186a3b">{{ amount }}</span>
      </div>
      <div class="persons" v-for="person in persons" :key="person.name">
        <div v-if="person.credit != 0">
          Должник {{ person.name }} должен кредитору {{ person.creditor }}
          <b class="credit" style="color: #186a3b">{{ person.credit }}</b>
        </div>
        <div v-else>{{ person.name }} никому ничего не должен</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        persons: [
          { name: "Анна", credit: 0, creditor: "Анна" },
          { name: "Вася", credit: 500, creditor: "Анна" },
          { name: "Вася", credit: 500, creditor: "Анна" },
        ],
        amount: 3800,
      };
    },
  };
  </script>
  
  <style scoped>
  .total-amount {
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
  