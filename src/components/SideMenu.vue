<template>
    <div>
        <v-navigation-drawer permanent>
            <div class="side-menu">
                <v-form>
                    <v-select class="sel">
                    </v-select>
                    <div class="btns-side">
                        <v-btn>Добавить</v-btn>
                        <v-btn>Итог</v-btn>
                    </div>
                </v-form>
            </div>
        </v-navigation-drawer>
    </div>
</template>

<script>

export default {
    components: {
    }
}
</script>

<style scoped>
.side-menu {
    margin: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1abc9c;
    font-family: Inter;
}
.group-of-check {
    margin: 16px;
    width: 243px;
    height: 108px;
}


.btns-side {
    margin: 8px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 15px;
}
</style>