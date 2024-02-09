<template>
  <div>
    <div class="card-product">
      <div class="product">{{ product.name }}</div>
      <div class="cost-payer">
        <div class="cost">{{ product.cost }}</div>
        <div class="payer">
          <div class="name_person">
            {{ product.payer.name }}
          </div>
        </div>
      </div>
      <div class="eaters">
        <div class="name_person" v-for="eater in product.eaters" :key="eater.id">
          {{ eater.name }}&nbsp
        </div>
      </div>
      <div class="btns">
        <v-btn class="btn" @click="$emit('remove', product)">Удалить</v-btn>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  emits:['remove'],
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
  
<style scoped lang="scss">
.card-product {
  margin-top: 30px;
  padding-top: 25px;
  height: 400px;
  width: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
  font-size: 24px;
  text-transform: uppercase;
  border: 1px solid #148f77;
  background: #eafaf1;
}

.product {
  width: 250px;
  height: 51px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 15px;
}

.cost-payer {
  margin-top: 20px;
  width: 250px;
  height: 51px;
  display: flex;
  align-items: center;
  flex-direction: row;
}

.cost {
  width: 90px;
  height: 51px;
  background: #1abc9c;
  border-radius: 15px 0px 0px 15px;
  border: 1px solid #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 24px;
  font-weight: 700;
}

.payer {
  width: 250px;
  height: 51px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 0px 15px 15px 0px;
}

.eaters {
  margin-top: 20px;
  width: 250px;
  min-height: 125px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 15px;
  font-size: medium;
}

.btns {
  width: 250px;
  height: 125px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.btn {
  &:hover {
    background: #1abc9c;
    color: #ffffff;
  }
}
</style>
  