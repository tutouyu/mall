<template>
  <div class="profile">
    <navbar class="navbar">
      <div slot="center">个人主页</div>
    </navbar>
    <userinfo></userinfo>
    <userwallet></userwallet>
    <otheritem :list-data="orderList"></otheritem>
    <otheritem :list-data="serviceList"></otheritem>
    <otheritem :list-data="moreList" ></otheritem>
  </div>
</template>

<script>
import navbar from "@/components/common/navbar/navbar.vue";
import userinfo from "./profilechild/userinfo.vue";
import userwallet from "./profilechild/userwallet";
import otheritem from "./profilechild/otheritem.vue";
export default {
   data() { 
    return {
        orderList: [
           '我的消息',
           '积分商城',
           '会员卡',
        ],
        serviceList: [
          '我的购物车',
           '下载购物APP'
        ],
        moreList:[
          '设置',
          '更多',
        ]
    }
  },
  components: {
    navbar,
    userinfo,
    userwallet,
    otheritem,
  },
};
</script>

<style scoped>
.navbar {
  background-color: var(--color-tint);
  color: white;
}
.profile {
  background-color: rgb(240, 233, 233);
  height: calc(100vh - 44px);
}

</style>