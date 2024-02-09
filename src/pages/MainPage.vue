<template>
    <v-app>
        <v-main>
            <v-container>
                <v-row justify="space-around" class="header-menu">
                    <v-dialog 
                    v-model="NewProductVisible" 
                    width="auto" 
                    scrollable>
                        <template v-slot:activator="{ props }">
                            <v-btn v-bind="props" class="btn">Добавить продукт</v-btn>
                        </template>
                        <v-card>
                            <new-product 
                            @create="createCard" 
                            :persons="persons" />
                        </v-card>
                    </v-dialog>
                    <v-dialog 
                    v-model="NewPersonVisible" 
                    width="auto" 
                    height="500px" 
                    scrollable>
                        <template v-slot:activator="{ props }">
                            <v-btn v-bind="props" class="btn">Добавить человека</v-btn>
                        </template>
                        <v-card>
                            <v-card-text>
                                <new-person 
                                @add="addPerson" 
                                :persons="persons"
                                @deletePerson="deletePerson" />
                            </v-card-text>
                        </v-card>
                    </v-dialog>
                    <v-dialog 
                    v-model="TotalAmountVisible" 
                    width="auto" 
                    scrollable>
                        <template v-slot:activator="{ props }">
                            <v-btn v-bind="props" class="btn">Итоговая сумма</v-btn>
                        </template>
                        <v-card>
                            <total-amount 
                            :persons="persons" 
                            @removeRepetitions="removeRepetitions" />
                        </v-card>
                    </v-dialog>
                </v-row>
            </v-container>
            <card-list :products="products" @remove="removeCard" />
        </v-main>
    </v-app>
</template>
  
<script>
import CardList from "@/components/CardList.vue";
import NewPerson from "@/components/DialogWindows/NewPerson.vue";
import NewProduct from "@/components/DialogWindows/NewProduct.vue";
import TotalAmount from "@/components/DialogWindows/TotalAmount.vue";
export default {
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
            persons: [],
            products: []
        }
    },
    methods: {
        createCard(product) {
            this.products.push(product);
            this.NewProductVisible = false;
            const productCost = +product.cost;
            const totalPrice = productCost / (product.eaters.length);
            for (const person of this.persons) {
                if (person.id == product.payer.id) {
                    person.wastes = person.wastes + productCost;
                }
                else {
                    for (const eater of product.eaters) {
                        if (person.id == eater.id) {
                            for (const creditor of person.creditors) {
                                if (creditor.id == product.payer.id) {
                                    creditor.credit = creditor.credit + totalPrice;
                                    break;
                                }
                                else if (creditor.id != product.payer.id) {
                                    eater.creditors.push({ id: product.payer.id, nameCred: product.payer.name, credit: totalPrice });
                                    break;
                                }
                            }
                            if (person.creditors.length == 0) { 
                                eater.creditors.push({ id: product.payer.id, nameCred: product.payer.name, credit: totalPrice }); 
                            }
                        }
                    }
                }
            }
        },
        removeCard(product) {
            const productCost = +product.cost;
            const totalPrice = productCost / (product.eaters.length);
            for (const person of this.persons) {
                if (person.id == product.payer.id) {
                    person.wastes = person.wastes - productCost;
                }
                else {
                    for (const creditor of person.creditors) {
                        if (creditor.id == product.payer.id) {
                            creditor.credit = creditor.credit - totalPrice;
                            if (creditor.credit == 0) {
                                person.creditors = person.creditors.filter((p) => p.id !== creditor.id);
                            }
                            break;
                        }
                    }
            }
            }
            this.products = this.products.filter((p) => p.id !== product.id);
        },
        addPerson(person) {
            this.persons.push(person);
        },
        deletePerson(person) {
            this.persons = this.persons.filter((p) => p.id !== person.id);
        },
        removeRepetitions() {
            for (const person1 of this.persons) {
                for (const person2 of this.persons) {
                    if (person1.id == person2.id) {
                        continue;
                    }
                    for (const cred1 of person1.creditors) {
                        if (cred1.id == person2.id) {
                            for (const cred2 of person2.creditors) {
                                if (cred2.id == person1.id) {
                                    if (cred1.credit > cred2.credit) {
                                        cred1.credit = cred1.credit - cred2.credit;
                                        person2.creditors = person2.creditors.filter((p) => p.id !== cred2.id);
                                    }
                                    else {
                                        cred2.credit = cred2.credit - cred1.credit;
                                        person1.creditors = person1.creditors.filter((p) => p.id !== cred1.id);
                                    }
                                }
                            }
                        }
                    }
                }
            }
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