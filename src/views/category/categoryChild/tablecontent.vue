<template>
 <scroll
    class="contentwrap"
    ref="scroll"
    :probetype="3"
    :observeImage="true"
     :pullUpLoad="true"
  >
  <div class="tablecontent">
    <div
      class="tableitem"
      v-for="(item, index) in categoriesProduct"
      :key="index"
    >
      <img :src="item.image" alt=""  @load="refresh" />
      <span>{{ item.title }}</span>
    </div>
  </div>
 </scroll>
</template>

<script>
import scroll from "@/components/common/scroll/scroll.vue";
export default {
  props: {
    categoriesProduct: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components:{
    scroll,
  },
  methods:{
    refresh(){
      this.$refs.scroll.refresh();
      
    }
  }
};
</script>
<style scoped>

.tableitem {
  float:left;
   width: 33%;
   padding: 2px;
   text-align: center;
}
.tableitem img{
  width: 100%;
}
.contentwrap{
   height: calc(100vh - 102px);
    overflow: hidden;
    float:left;
    width: 80%;
}
</style>