<template>
   <div id="shopcart">
   
    <navbar class="nav-bar">
      <div slot="center" class="center">购物车({{cartlen}})</div>
    </navbar>
    <cartlist />  
    
    <cartbottom />
  </div>
</template>

<script>
import navbar from "@/components/common/navbar/navbar.vue";
import cartlist from "./shopcartchild/shopcartlist.vue";
import cartbottom from "./shopcartchild/cartbottom";
import Cartbottom from './shopcartchild/cartbottom.vue';
import { mapGetters } from 'vuex';
export default {
  name: "shopcart",
  components: {
    navbar,
    cartlist,
    cartbottom,
    Cartbottom
  },
  computed: {
    ...mapGetters(['cartList']),
    cartlen() {
      return this.$store.state.product.length;
    },
  },

};
</script>
<style scoped>
 #shopcart {
    height: 100vh;
  }

  .nav-bar {
    background-color:  var(--color-tint);
    font-weight: 700;
    color: #fff;
  }
  .center{
    width: 100%;
  }
  .cart-list {
    position: absolute;
    top: 44px;
    bottom: 49px;
    width: 100%;
  }
</style>