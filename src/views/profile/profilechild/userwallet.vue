<template>
 <div class="wallet">
     <div class="walletitem">
         <div class="item"><span>0.00</span>元</div>
         <span>我的余额</span>
     </div>
     <div class="walletitem">
         <div class="item"><span>0</span>个</div>
         <span>我的优惠</span>
     </div>
     <div class="walletitem">
         <div class="item"><span>0</span>分</div>
         <span>我的积分</span>
     </div>
 </div>
</template>

<script>
export default {

}

</script>
<style>
.wallet{
    height: 80px;
    display: flex;
    text-align: center;
    background-color: white;
}
.walletitem{
    margin-top:17px;   
    flex:1;
}
.item{
    margin-bottom: 3px;
}
.item span{
    color: rgb(216, 65, 65);
    font-size: 20px;
}
</style>