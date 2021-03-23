<template>
  <div id="detail">
    <detailnav class="nav" @tabclick="tabclick" ref="nav" />
    <scroll
      class="content"
      ref="scroll"
      :probetype="3"
      @scroll="contentScroll"
      :observeImage="true"
    >
      <detailswiper :topImages="topImages"></detailswiper>
      <detailbaseinfo :goods="goods"></detailbaseinfo>
      <shop :shop="shopInfo"></shop>
      <goodsinfo :detailInfo="detailInfo"></goodsinfo>
      <goodsparams :param-info="paramInfo" ref="params"></goodsparams>
      <detailcomment :commentinfo="commentinfo" ref="comment"></detailcomment>
      <goods :goods="recommends" ref="recommend"></goods>
    </scroll>
    <back v-if="isshow"></back>
    <bottom class="bottom-bar" @addToCart="addToCart"></bottom>
  </div>
</template>

<script>
import {
  getdetail,
  Goods,
  GoodsParam,
  getRecommend,
} from "@/network/detail.js";
import detailnav from "./detailchildren/detailnav.vue";
import detailswiper from "./detailchildren/detailswiper.vue";
import detailbaseinfo from "./detailchildren/detailbaseinfo.vue";
import scroll from "@/components/common/scroll/scroll.vue";
import shop from "./detailchildren/detailshopinfo";
import goodsinfo from "./detailchildren/detailgoodsinfo";
import goodsparams from "./detailchildren/detailparaminfo";
import detailcomment from "./detailchildren/detailcomment";
import goods from "@/components/content/goods/goods.vue";
import back from "@/components/common/back/backtop.vue";
import bottom from "./detailchildren/detailbottom.vue";
export default {
  name:"detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shopInfo: {},
      detailInfo: {},
      paramInfo: {},
      commentinfo: {},
      recommends: [],
      themeTopYs: [],
      getThemeTopY: null,
      currentIndex: 0,
      product: {},
      isshow: false,
    };
  },
  components: {
    detailnav,
    detailswiper,
    detailbaseinfo,
    scroll,
    shop,
    goodsinfo,
    goodsparams,
    detailcomment,
    getRecommend,
    goods,
    back,
    bottom,
  },
  methods: {
    contentScroll(position) {
      const positionY = -position.y;
      if (positionY < this.$refs.params.$el.offsetTop) {
        this.currentIndex = 0;
      } else if (
        positionY >= this.$refs.params.$el.offsetTop &&
        positionY < this.$refs.comment.$el.offsetTop
      ) {
        this.currentIndex = 1;
      } else if (
        positionY >= this.$refs.comment.$el.offsetTop &&
        positionY < this.$refs.recommend.$el.offsetTop
      ) {
        this.currentIndex = 2;
      } else if (positionY >= this.$refs.recommend.$el.offsetTop) {
        this.currentIndex = 3;
      }
      this.$refs.nav.cruentindex = this.currentIndex;
      if (positionY > 1000) {
        this.isshow = true;
      } else {
        this.isshow = false;
      }
    },
    tabclick(index) {
      switch (index) {
        case 0:
          this.$refs.scroll.scrollTo(0, 0, 1000);
          break;
        case 1:
          this.$refs.scroll.scrollTo(0, -this.$refs.params.$el.offsetTop, 1000);
          break;
        case 2:
          this.$refs.scroll.scrollTo(
            0,
            -this.$refs.comment.$el.offsetTop,
            1000
          );
          break;
        case 3:
          this.$refs.scroll.scrollTo(
            0,
            -this.$refs.recommend.$el.offsetTop,
            1000
          );
          break;
      }
    },
    addToCart(){
       this.product.iid = this.iid
      this.product.img = this.topImages[0]
      this.product.title = this.goods.title
      this.product.desc = this.goods.desc
      this.product.newPrice = this.goods.realPrice
      this.$store.commit('addCart',this.product)
    }
  },
  created() {
    this.iid = this.$route.params.iid;
    console.log(this.iid);
    getdetail(this.iid).then((res) => {
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shopInfo = data.shopInfo;
      this.detailInfo = data.detailInfo;
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      if (data.rate.cRate !== 0) {
        this.commentinfo = data.rate.list[0];
      }
    });
    getRecommend().then((res) => {
      this.recommends = res.data.list;
    });
  },
};
</script>
<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.nav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content {
  height: calc(100% - 102px);
  overflow: hidden;
}
.bottom-bar {
  position: relative;
  top:7px;
}
</style>