<template>
 <div id="goods" >
   <goodsitem v-for="item in goods" :key="item.id" :goodsitem="item">
   </goodsitem>
 </div>
</template>

<script>
import goodsitem from './goodsitem'
export default {
   name:'goodlist',
   components:{
       goodsitem,
   },
   props:{
       goods:{
           type:Array,
           dafault(){
               return []
           }
       }
   },
  
}

</script>
<style scoped>
   #goods{
       display: flex;
       flex-wrap: wrap;
   }
</style>