<template>
    <div class="check-button">
      <div class="icon-selector" :class="{'checked': checked}" @click="clickchange">
        <img src="@/assets/img/cart/tick.svg" alt="">
      </div>
    </div>
</template>

<script>
import bus from "@/assets/bus.js";
export default {
	name: "CheckButton",
    props: {
		ischecked: {
	        type: Boolean,
            default: true,
      }
    },
    components:{
         bus
    },
    data(){
      return{
        checked:this.ischecked
      }
    },
    methods:{
      clickchange(){
        this.$emit('clickchange');
        this.checked=!this.checked
      }
    },
  //   mounted(){
  //       bus.$on("changetrue",()=>{
  //         this.checked=true
  //         console.log("true")
  //       });
  //       bus.$on("changefalse",()=>{
  //         this.checked=false
  //         console.log("false")
  //       });
  // },
   watch: {
		ischecked: function (newValue) {
        this.checked = newValue;
        console.log("props变化了"+this.checked)
      }
    }
	}
</script>

<style scoped>
  .icon-selector {
    position: relative;
    margin: 0;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 2px solid #ccc;
    cursor: pointer;
  }

  .checked {
    background-color: #ff8198;
    border-color: #ff8198;
  }
</style>