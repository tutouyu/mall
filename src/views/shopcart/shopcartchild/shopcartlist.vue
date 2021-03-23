<template>
  <div class="cart-list">
    <scroll
       class="wrap"
      ref="scroll"
      :probetype="3"
      @scroll="contentScroll"
      :observeImage="true"
    >
   <div>
        <cart-list-item
          v-for="item in cartList"
          :key="item.iid"
          :item-info="item"
        ></cart-list-item>
      </div>
    </scroll>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import scroll from "@/components/common/scroll/scroll.vue";
import cartListItem from "./shopcartlistitem.vue";
export default {
  computed: {
    ...mapGetters(["cartList"]),
  },
  components: {
    scroll,
    cartListItem,
  },
  activated() {
    this.$refs.scroll.refresh();
  },
  methods:{
     contentScroll(){}
  }
};
</script>
<style>
.cart_list {
  height: calc(100vh - 136px);
}
.wrap {
  height:calc(100vh - 136px);
  overflow: hidden;
}
</style>