<template>
    <div class="start-page" justify-center>
        <v-btn class="btn" size="x-large"  @click="$router.push('/main')">Начнём</v-btn>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="scss">
.start-page{
    width:100%;
    height:100%;
    margin: 50px;
    display:flex;
    justify-content: center;
}
.btn:hover{
    background: #eafaf1;
    }
</style>