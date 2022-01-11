<template>
  <div class="user">
    <div class="usericon">
      <slot name="headicon">
        <img src="@/assets/img/profile/avatar.svg" height="70px" width="70px" />
      </slot>
    </div>
    <div class="userleft">
      <slot name="username">
        <div>登录/注册</div>
      </slot>
      <div class="phone">
        <slot name="user-phone"> 暂无绑定手机号</slot>
      </div>
    </div>
    <div class="userright">
        ^
    </div>
  </div>
</template>

<script>
export default {};
</script>
<style>
.user {
  height: 80px;
  background-color: var(--color-tint);
  padding-top: 5px;
  color: white;
}
.usericon {
  float: left;
  margin-left: 8px;
}
.userleft {
  margin: 15px 0 0 10px;
  float: left;
  
}
.userleft div:nth-child(1) {
  font-size: 15px;
}
.userleft div:nth-child(2) {
    margin-top:5px;
  font-size: 10px;
}
.userright{
    margin:18px 20px 0 0;
    float:right;
    font-size: 30px;
    transform: rotate(90deg);
}
</style>