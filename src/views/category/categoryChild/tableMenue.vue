<template>
  <scroll
    id="tablemenue"
    class="menuewrap"
    ref="scroll"
    :probetype="3"
    :observeImage="true"
     :pullUpLoad="true"
  >
    <div>
        <div
          v-for="(item, index) in categories"
          :key="index"
          class="menueitem"
          @click="itemclick(index)"
          :class="{ active: actindex == index }"
        >
          {{ item.title }}
        </div>
    </div>
  </scroll>
</template>

<script>
import scroll from "@/components/common/scroll/scroll.vue";
export default {
  data() {
    return {
      actindex: 0,
    };
  },
  components: {
    scroll,
  },
  props: {
    categories: Array,
  },
  methods: {
    itemclick(index) {
      console.log(index);
      this.actindex = index;
      this.$emit("itemclick", index);
    },
  },
};
</script>
<style scoped>
.menuewrap{
    height: calc(100vh - 93px);
    overflow: hidden;
    float:left
}
#tablemenue {
  background-color: #f6f6f6;
  width: 20%;
  box-sizing: border-box;
}
.menueitem {
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 14px;
}
.active {
  font-weight: 700;
  color: var(--color-high-text);
  background-color: #fff;
  border-left: 3px solid var(--color-high-text);
}
</style>