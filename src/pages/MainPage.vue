<template>
    <v-app>
        <v-main>
            <v-container>
                <v-row justify="space-around" class="header-menu">
                    <v-dialog v-model="NewProductVisible" width="auto" scrollable>
                        <template v-slot:activator="{ props }">
                            <v-btn v-bind="props" class="btn">Добавить продукт</v-btn>
                        </template>
                        <v-card>
                            <new-product />
                        </v-card>
                    </v-dialog>
                    <v-dialog v-model="NewPersonVisible" width="auto" height="500px" scrollable>
                        <template v-slot:activator="{ props }">
                            <v-btn v-bind="props" class="btn">Добавить человека</v-btn>
                        </template>
                        <v-card>
                            <v-card-text>
                                <new-person />
                            </v-card-text>
                        </v-card>
                    </v-dialog>
                    <v-dialog v-model="TotalAmountVisible" width="auto" scrollable>
                        <template v-slot:activator="{ props }">
                            <v-btn v-bind="props" class="btn">Итоговая сумма</v-btn>
                        </template>
                        <v-card>
                            <total-amount />
                        </v-card>
                    </v-dialog>
                </v-row>
            </v-container>
            <card-list />
        </v-main>
    </v-app>
</template>
  
<script>
import CardList from "@/components/CardList.vue";
import NewPerson from "@/components/DialogWindows/NewPerson.vue";
import NewProduct from "@/components/DialogWindows/NewProduct.vue";
import TotalAmount from "@/components/DialogWindows/TotalAmount.vue";
import { usePersonsStore } from "@/stores/personsStore";
import { useProductsStore } from "@/stores/productStore";
export default {
    setup() {
        const personsStore = usePersonsStore();
        const productStore = useProductsStore();
        return {
            personsStore,
            productStore
        }
    },
    components: {
        NewPerson,
        NewProduct,
        TotalAmount,
        CardList,
    },
    data() {
        return {
            NewProductVisible: false,
            NewPersonVisible: false,
            TotalAmountVisible: false,
        }
    },
};
</script>

<style scoped lang="scss">
.btn {
    width: 300px;

    &:hover {
        background: #eafaf1;
    }
}
</style>