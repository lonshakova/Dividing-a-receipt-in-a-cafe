<template>
    <div>
        <div class="side-menu">

            <group-of-check></group-of-check>
            <group-of-check></group-of-check>
            <group-of-check></group-of-check>
            <button-side style="width: 243px; height: 50px;">Добавить группу</button-side>
        </div>
    </div>
</template>

<script>
import GroupOfCheck from './GroupOfCheck.vue';
export default {
    components: {
        GroupOfCheck
    }
}
</script>

<style scoped>
.side-menu {
    width: 301px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items:center;
    background-color: #1ABC9C;

    
}
</style>