<template>
  <div class="outer-container">
    <div id="center-page" :class="['navigation-container',{'white-theme':isWhiteTheme}]">
      <div class="logo-container">Linkall</div>
    <el-menu :router="true" mode="horizontal" :default-active="$route.path">
      <el-menu-item
        v-for="menuItem in menuList"
        :key="menuItem.path"
        :index="menuItem.path"
        >{{ menuItem.name }}</el-menu-item
      >
      
    </el-menu>
    <img :src="isWhiteTheme?githubImgBlack:githubImg"/>
    </div>
    
    <!-- <i class="el-icon-arrow-down arrow-icon"></i>
    <div class="lang">English</div> -->
    <!-- <el-select v-model="lang">
        <el-option label="English" value="en"></el-option>
    </el-select> -->
  </div>
</template>

<script>
export default {
  name: "compony-page",
  props:{
     menuList:{
         type:Array,
         default:()=>([])
     }
  },
  data() {
    return {
    lang:'en',
    githubImg:require('@/assets/github.png'),
    githubImgBlack:require('@/assets/github-black.png'),
    };
  },
  computed:{
    isWhiteTheme(){
      return this.$route.path === '/open-source'
    }
  }
};
</script>

<style lang="less">
.outer-container{
  height:167px;
    width:100%;
}
.navigation-container{
    display: flex;
    align-items: center;
    height:167px;
    width:100%;
    .logo-container{
        width:30%;
        color: #DBE1F8;
        font-size:20px;
        line-height:32px;
        font-family: 'PingFangMedium';
        text-align: center;
    }
    .el-menu{
      width:50%;
      // background-color:#212844;
      background: rgba(0,0,0,0);
      &.el-menu--horizontal{
        border:0;
        
        .el-menu-item{
          font-size:18px;
          line-height:32px;
          height:32px;
          &:hover{
            background: rgba(0,0,0,0);
            color:#fff;
          }
          &:focus{
            background: rgba(0,0,0,0);
            color:#fff;
          }
        }
        .el-menu-item.is-active{
          border:0;
          color:#fff;
        }
      }
    }
    .arrow-icon{
      color:#979EB9;
      width:15px;
      height:32px;
      line-height:32px;
    }
    .lang{
      margin-left:10px;
      height:32px;
      line-height:32px;
      color:#979EB9;
    }
    &.white-theme{
      background: rgba(0,0,0,0);
      .logo-container{
        color:#5F5F5F;
      }
      
      .el-menu{
        background: rgba(0,0,0,0);
        &.el-menu--horizontal{
          .el-menu-item{
            color:#5F5F5F;
          &:hover{
            background: rgba(0,0,0,0);
            color:#000;
          }
          &:focus{
            background: rgba(0,0,0,0);
            color:#000;
          }
          &.is-active{
            color:#000
          }
          }
        }
      }
    }
}
</style>