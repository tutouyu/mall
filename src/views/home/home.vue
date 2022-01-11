<template>
  <div id="home">
    <navbar class="home-nav">
      <div slot="center" class="title">购物街</div>
    </navbar>
     <tabbercontrol
        class="control" 
        :title="['流行', '新歌', '精选']"
        @tabclick="tabclick"
        ref="control1"
        v-show="iscontrolshow"
      />
    <scroll
      class="wrap"
      ref="scroll"
      :probetype="3"
      @scroll="contentScroll"
      :observeImage="true"
      :pullUpLoad="true"
      @pullingUp="getmore"
    >
      <swiper :banner="banner"></swiper>
      <recommend :recommends="recommends"></recommend>
      <feature></feature>
      <tabbercontrol
        :title="['流行', '新歌', '精选']"
        @tabclick="tabclick"
        ref="control2"
      ></tabbercontrol>
      <goods :goods="goods[cruenttype].list" @tabclick="tabclick"></goods>
    </scroll>
    <back v-show="isbackshow" @click.native="backtop"></back>
    
  </div>
</template>

<script>
import navbar from "@/components/common/navbar/navbar.vue";
import { getmultidata, gethomegoods } from "@/network/home.js";
import swiper from "@/views/home/homechildren/swiper.vue";
import recommend from "@/views/home/homechildren/recommend.vue";
import feature from "@/views/home/homechildren/featureview.vue";
import tabbercontrol from "@/components/content/tabbercontrol/tabbercontrol.vue";
import goods from "@/components/content/goods/goods.vue";
import scroll from "@/components/common/scroll/scroll.vue";
import back from "@/components/common/back/backtop.vue";
import bus from "@/assets/bus.js";
import {debounce} from "@/common/utils.js"
export default {
  name: "home",
  data() {
    return {
      banner: [],
      recommends: [],
      cruenttype: "pop",
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      isbackshow: false,
      iscontrolshow: false,
      savey:0,
    };
  },
  components: {
    navbar,
    swiper,
    recommend,
    feature,
    tabbercontrol,
    goods,
    scroll,
    back,
  },
  mounted () {
  bus.$on("refresh",()=>{
    debounce(this.$refs.scroll.refresh(),100000)
    console.log("hahaha")
  })
 },
  methods: {
    backtop() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(position) {
      this.isbackshow = -position.y > 1000;
      this.iscontrolshow = this.iscontrol= -position.y>this.$refs.control2.$el.offsetTop
    },
    getmore(){
      this.gethomegoods(this.cruenttype)
    },
    /*

    */
    getmultidata() {
      getmultidata().then((res) => {
        this.banner = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    gethomegoods(type) {
      const page = this.goods[type].page + 1;
      gethomegoods(page, type).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page++;
        this.$refs.scroll.finishPullUp();
           console.log(this.goods[this.cruenttype].list)
      });
    },
    tabclick(index) {
      switch (index) {
        case 0:
          this.cruenttype = "pop";
          break;
        case 1:
          this.cruenttype = "new";
          break;
        case 2:
          this.cruenttype = "sell";
          break;
      }
      this.$refs.control1.cruentindex=index;
      this.$refs.control2.cruentindex=index;
    },
  },
  created() {
    this.getmultidata();
    this.gethomegoods("pop");
    this.gethomegoods("sell");
    this.gethomegoods("new");
  },
  activated(){
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
    this.$refs.scroll.refresh();
  },
  deactivated(){
     this.saveY = this.$refs.scroll.getScrollY()
  }

};
</script>
<style scoped>
.title{
  width: 100%;
}
#home {
  height: 100vh;
}
.home-nav {
  background-color: var(--color-tint);
  color: white;
}
.wrap {
  height: calc(100vh - 93px);
  overflow: hidden;
}
.control{
  position: fixed;
  top:37px;
  right:0px;
  left:0px;
  z-index: 999;
}
</style>