<template>
    <div>
        <div class="group-of-check">
                <v-form>
                    <v-select class="sel" :items="items">
                        <option value="">Группа чеков 1</option>
                        <option value="1">Чек 1</option>
                        <option value="2">Чек 2</option>
                        <option value="3">Чек 3</option>
                    </v-select>
                    <div class="btns-side">
                        <v-btn>Добавить</v-btn>
                        <v-btn>Итог</v-btn>
                    </div>
                </v-form>
            </div>
    </div>
</template>

<script>
    export default {
        items:["1", '2','3','4']
    }
</script>

<style scoped>
.group-of-check {
    margin: 16px;
    width: 243px;
    height: 108px;
}
.sel{
    display: flex;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 50px;
    font-size: 24px;
    border-radius:15px;
}

.btns-side{
    margin: 8px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius:15px;
}
</style>