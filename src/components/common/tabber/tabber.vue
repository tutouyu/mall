<template>
  <div class="tabber">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabber",
};
</script>
<style scoped>
  .tabber  {

  box-shadow: 0 -10px 5px #888888;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 49px;
  background-color: white;
}
</style>