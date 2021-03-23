<template>
  <div id="app">
    <keep-alive exclude="detail">
    <router-view ></router-view>
    </keep-alive>
   <maintabber></maintabber>
  </div>
</template>
<script>
import maintabber from './components/content/maintabber/maintabber.vue';
export default {
  name: "app",
  components:{
    maintabber,
  }
};
</script>

<style>
@import "./assets/css/base.css";
</style>
