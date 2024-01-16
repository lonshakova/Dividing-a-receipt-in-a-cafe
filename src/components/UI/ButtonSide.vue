<template>
    <button class="btn-side">
      <slot></slot>
    </button>
  </template>

<script>
export default {
  name: "button-side",
};
</script>

<style scoped>
.btn-side{
    padding: 10px;
    height: 100%;
    font-size: 24px;
    border-radius:15px;
    background-color: #ffffff;
    
}
.btn-side:hover{
    background-color: #EAFAF1;
}
</style>