<template>
  <div id="tabbercontrol">
    <div
      v-for="(item, index) in title"
      :key="index"
      class="controlitem"
      :class="{ active: cruentindex == index }"
      @click="controlclick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbercontrol",
  data() {
    return {
      cruentindex: 0,
    };
  },
  props: {
    title: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    controlclick(index) {
      this.cruentindex = index;
      this.$emit('tabclick',index);
    },
  },
};
</script>
<style scoped>
#tabbercontrol {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  background-color: #fff;
}
.controlitem {
  flex: 1;
}
.active span{
    padding :0 5px;
    border-bottom: 1px solid deeppink;
}
.active{
    color:deeppink;
    
}
</style>