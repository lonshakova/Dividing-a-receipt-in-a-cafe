<template>
    <div>
        <div class="card-list">
            <card-product></card-product>
            <card-product></card-product>
            <card-product></card-product>
            <card-product></card-product>
            <card-product></card-product>
            <card-product></card-product>
            <card-product></card-product>
        </div>
    </div>
</template>

<script>
import CardProduct from "./CardProduct.vue";
export default {
    components: {
        CardProduct
    }
}
</script>

<style scoped>
.card-list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

}
</style>