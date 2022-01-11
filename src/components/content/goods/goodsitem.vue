<template>
  <div id="goodsitem" @click="goodsdetail">
    <img :src="showimg" alt="" @load="refresh"/>
    <div class="goodsinfo">
      <p>{{ goodsitem.title }}</p>
      <span class="price">{{goodsitem.price}}</span>
      <span class="collect">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
import goods from "./goods";
import bus from "@/assets/bus.js"
export default {
  name: "goodsitem",
  props: {
    goodsitem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    showimg() {
      return this.goodsitem.image || this.goodsitem.show.img;
    },
  },
  components: {
    goods,
  },
  methods:{
    goodsdetail(){
      this.$router.push('/detail/'+ this.goodsitem.iid);
    },
    refresh(){
      bus.$emit("refresh");
    }
  }
};
</script>
<style scoped>
#goodsitem {
  padding-bottom: 40px;
  width: 50%;
  position: relative;
}
#goodsitem img {
  width: 100%;
  height: 100%;
}
.goodsinfo {
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 12px;
}
.goodsinfo p{
     overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

}
 .goodsinfo .price {
    color: var(--color-high-text);
    padding-right: 20px;
  }
   .goodsinfo .collect {
    position: relative;
  }
  .goodsinfo .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url(../../../assets/img/common/collect.svg) 0 0/14px 14px;
  }
</style>