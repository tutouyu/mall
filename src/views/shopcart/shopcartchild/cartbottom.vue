<template>
  <div class="bottommenue">
    <checkbutton class="button" @click.native="selectAll" :ischecked="isSelectorAll"/>
    <div class="totalprice">
      <span>合计:￥</span>
      {{ total }}
    </div>
    <div class="account" @click="change">结算({{ checklen }})</div>
  </div>
</template>

<script>
import checkbutton from "@/components/content/checkButton.vue";
import { mapGetters } from "vuex";
import bus from "@/assets/bus.js";
export default {
  computed: {
    ...mapGetters(["cartList","checklen"]),
    isSelectorAll() {
      return this.cartList.find((item) => item.checked == false) == undefined;
    },
    total() {
      return this.$store.state.product
        .filter((item) => {
          return item.checked;
        })
        .reduce((preValue, item) => {
          return preValue + item.count * item.newPrice;
        }, 0)
        .toFixed(2);
    },
  },
  components: {
    checkbutton,
    bus,
  },
  methods: {
    change() {
      console.log(this.cartList);
    },
    selectAll() {
      if (!this.isSelectorAll) {
        this.$store.commit("checkedall");
        // bus.$emit("changetrue");
      } else {
        this.$store.commit("notcheckedall");
        // bus.$emit("changefalse");
      }
    },
  },
  
};
</script>
<style>
.bottommenue {
  position: fixed;
  bottom: 50px;
  left: 0;
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
}
.button {
  padding-left: 20px;
}
.totalprice {
  padding-left: 10px;
}
.account {
  background-color: red;
  color: white;
  height: 44px;
  line-height: 44px;
  padding: 0 30px;
  font-size: 14px;
  margin-left: auto;
}
</style>