<template>
  <div>
    <header>
      <i class="iconfont icon-fanhui fz" @click="fanhui"><span class="title">{{name}}</span>

      </i>
    </header>
    <div class="zhanweifu"></div>
  </div>
</template>

<script>
  export default {
    name:'header',
    data:function () {
      return{
        name:'',
      }
    },
    created(){
      this.getName();
    },
    methods:{
      //返回
      fanhui:function () {
        this.$router.go(-1);
      },
      //接收名字
     getName:function () {
       console.log(this.$route.query.name)
       var name=this.$route.query.name;
       this.name=name;
       }
    }
  }
</script>

<style scoped>
  header{
    height:0.88rem;
    background: #353535;
    font-size:0.32rem;
    color: #353535;
    display: flex;
    align-item:center;
    justify-content:flex-start;
    position: fixed;
    top:0;
    left:0;
    width:100vw;
    z-index:99;
  }
  .fz{
    font-size:0.48rem;
    color:#353535;
  }
  .title{
    dispay:inline-block;
    padding-left:0.2rem;
  }
  .zhanweifu{
    margin-top:0.88rem;
  }
</style>
