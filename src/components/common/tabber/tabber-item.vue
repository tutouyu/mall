<template>
  <div class="tabber-item" @click="clickItem">
    <div v-if="!isActive"><slot name="img"></slot></div>
    <div v-else><slot name="img-active"></slot></div>
    <div :class="{active:isActive}"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
    name:'tabberItem',
    data(){
        return{
        }
    },
    props:{
       path: String,

    },
    computed:{
       isActive(){
           return this.$route.path==this.path
       }
    },
    methods:{
        clickItem(){
            this.$router.push(this.path);
        }
    }
};
</script>
<style scoped>
.tabber-item {
  text-align: center;
  flex: 1;
}
.active {
    color: pink
}
.tabber-item img{
  height: 29px;
}
</style>