<template>
  <div id="wrap" ref="wrap">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import btscroll from "better-scroll";
export default {
  name: "scroll",
  components: {
    btscroll,
  },
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probetype: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
    observeDOM: {
      type: Boolean,
      default: false,
    },
    observeImage: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  methods:{
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    getScrollY() {
      return this.scroll ? this.scroll.y : 0
    },
     scrollTo(x, y, time) {
      this.scroll && this.scroll.scrollTo(x, y, time);
    },
     refresh() {
      this.scroll && this.scroll.refresh()
    }
  },
  mounted() {
    this.scroll = new btscroll(this.$refs.wrap, {
      click: true,
      probeType: this.probetype,
      observeImage: this.observeImage,
       pullUpLoad: this.pullUpLoad,
    });

    if (this.probetype === 2 || this.probetype === 3) {
      this.scroll.on("scroll", (position) => {
        this.$emit("scroll", position);
      });
    }
    if (this.pullUpLoad == true) {
      this.scroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }
  
  },
};
</script>
<style scoped>
</style>