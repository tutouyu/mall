<template>
 <div> <navbar>
      <div slot="left">
        <back></back>
      </div>
      <div slot="center" class="center">
        <div
          class="center-item"
          :class="{ active: cruentindex == index }"
          v-for="(item, index) in title"
          :key="index"
          @click="tabclick(index)"
        >
          {{ item }}
        </div>
      </div>
    </navbar></div>
</template>

<script>
import navbar from "@/components/common/navbar/navbar.vue";
import back from "@/components/common/back/back.vue";
export default {
 name: "detail",
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      cruentindex: 0,
    };
  },
  components: {
    navbar,
    back
  },
  methods: {
    tabclick(index) {
      this.cruentindex = index;
      this.$emit('tabclick',index);
    },
  },
};

</script>
<style>
.center {
  display: flex;
}
.center-item {
  flex: 1;
}
.active {
  color: deeppink;
}
</style>