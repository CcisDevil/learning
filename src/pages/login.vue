<template>
  <div class="login">
    <p class="login_admin">Admin</p>
    <div class="admin">
      <div class="admin_left">
        用户名
      </div>
      <div>
        <input type="text" placeholder="请填写用户名" class="quchu" v-model="name">
      </div>
    </div>
    <!--密码-->
    <div class="admin s_top">
      <div class="admin_left">
        密码
      </div>
      <div class="admin_right">
        <input type="password" placenholder="请填写密码" class="quchu" v-model="password">
      </div>
    </div>
    <!--登录-->
    <div class="login_login" @click="login">
      登录
    </div>
    <div class="login_login checkout" @click="$store.commit('checkoutData')">
      退出登录
    </div>
  </div>
</template>

<script>
  import{ Toast } from "mint=ui";//引入mint ui
  // 引入vuex快捷写法
  export default{
    name:"name",
    data:function () {
      return{
        name:"",
        password:""
      };
    },
    watch:{
      $route:"checkLogin"
    },
    created(){
      this.checkLogin();
    },
    methods:{
      checkLogin(){
        // 检查是否存在logindata
        if (this.$store.state.logindata.length == 0){
        this.$router.push("/login");
      } else {
        //否则跳转到登录后的页面
        this.$router.push("/main");
      }
    },

      //  登录验证
    logun:function () {
      if(!this.name){
      Toast({
        message:"请填写用户名",
        iconClass:"iconfont icon-shanchu"
      });
     } else if(!this.password){
        Thast({
          massage:"请填写密码",
          iconClass:"iconfont icon-shanchu"
        });
      } else
    }
    }
  }
</script>
