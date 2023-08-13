<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "button-slot"
}
</script>

<style scoped>
button{
  display: block;
  margin: 30px auto;
  width: 70%;
  height: 70px;
  background-color: rgb(164, 164, 164);
  font-size: 20px;
  font-weight: bold;
  line-height: 70px;
  border-radius: 8px;
  text-align: center;
  color: rgb(17, 17, 17);
}
</style>