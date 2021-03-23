<template>
 <div class="back">
     <img @click="back" src="@/assets/img/common/back.svg" alt="">
 </div>
</template>

<script>
export default {
  name:"back",
  methods:{
      back(){
          this.$router.back()
      }
  }
}

</script>
<style scoped>
  .back{
      margin-top: 7px;
  }
</style>