<template>
    <div>
        <div class="card-list"  v-if="products.length > 0">
            <transition-group name="card-list">
                <card-product  v-for="product in products" v-bind:product="product" :key="product.id"
                    @remove="$emit('remove', product)"></card-product>
            </transition-group>
        </div>
        <h2 class="empty-list" v-else>Пока продуктов нет. Хотите добавить новый?</h2>
    </div>
</template>
  
<script>
import CardProduct from "./CardProduct.vue";
export default {
    components: {
        CardProduct,
    },
    props: {
        products: {
            type: Array,
            required: true,
        },
    },
};
</script>
  
<style scoped>
.card-list {
    min-width: 1020px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.card-list-item {
    display: inline-block;
    margin-right: 10px;
}

.card-list-enter-active,
.card-list-leave-active {
    transition: all 0.8s ease;
}

.card-list-enter-from,
.card-list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

.card-list-move {
    transition: transform 0.8s ease;
}
.empty-list{
    width: 100%;
    display: flex;
    justify-content: center;
    color: #148f77;
}
</style>
  