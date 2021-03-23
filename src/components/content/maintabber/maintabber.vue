<template>
<div id="maintabber">
 <tabber>
   <tabberItem path="/home">
     <img slot="img" src="@/assets/img/tabbar/home.svg" alt="">
     <img slot="img-active" src="@/assets/img/tabbar/home_active.svg" alt="">
     <div slot="text">主页</div>
   </tabberItem>
   <tabberItem path="/profile">
    <img slot="img" src="@/assets/img/tabbar/profile.svg" alt="">
    <img slot="img-active" src="@/assets/img/tabbar/profile_active.svg" alt="">
     <div slot="text">分类</div>
   </tabberItem>
   <tabberItem path="/shopcart">
      <img slot="img" src="@/assets/img/tabbar/shopcart.svg" alt="">
      <img slot="img-active" src="@/assets/img/tabbar/shopcart_active.svg" alt="">
     <div slot="text">购物车</div>
   </tabberItem>
   <tabberItem path="/category">
      <img slot="img" src="@/assets/img/tabbar/category.svg" alt="">
      <img slot="img-active" src="@/assets/img/tabbar/category_active.svg" alt="">
     <div slot="text">我的</div>
   </tabberItem>
 </tabber>
 </div>
</template>
<script>
import tabber from '../../common/tabber/tabber.vue';
import tabberItem from "../../common/tabber/tabber-item.vue";
export default{
  components: {
   tabber,
   tabberItem
 }
}
</script>

<style>
</style>
