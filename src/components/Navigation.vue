<template>
  <div class="outer-container">
    <div
      id="center-page"
      :class="['navigation-container', { 'white-theme': isWhiteTheme }]"
    >
      <div class="logo-container" @click="handleLogoClick">
        <div class="logo-box">
          <img :src="logoImg" />Linkall
        </div>
        
      </div>
      <el-menu :router="true" mode="horizontal" :default-active="$route.path">
        <el-menu-item
          v-for="menuItem in menuList"
          :key="menuItem.path"
          :index="menuItem.path"
          >{{ menuItem.name }}</el-menu-item
        >
      </el-menu>
      <!-- <img :src="isWhiteTheme?githubImgBlack:githubImg" @click="gotoGithub"/> -->
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
  props: {
    menuList: {
      type: Array,
      default: () => [],
    },
    isWhiteTheme:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      lang: "en",
      githubImg: require("@/assets/github.png"),
      githubImgBlack: require("@/assets/github-black.png"),
      logoImg: require("@/assets/logo.png"),
    };
  },
  // computed: {
  //   isWhiteTheme() {
  //     return this.$route.path === "/community";
  //   },
  // },
  methods: {
    gotoGithub() {},
    handleLogoClick() {
      this.$router.push("/products");
    },
  },
};
</script>

<style lang="less">
.outer-container {
  height: 167px;
  width: 100%;
  z-index: 99;
  position: relative;
}
.navigation-container {
  display: flex;
  align-items: center;
  height: 167px;
  width: 100%;
  .logo-container {
    width: 34.5%;
    padding-right: 120px;
    padding-left: 160px;
    .logo-box{
      color: #fff;
    font-size: 30px;
    line-height: 41px;
    font-family: "AvenirNext-DemiBold";
    cursor: pointer;
    display: flex;
    align-items: center;
    }
    img {
      margin-right: 11px;
      width: 46px;
      height: 42px;
      margin-top: -10px;
    }
  }
  .el-menu {
    width: 50.5%;
    // background-color:#212844;
    background: rgba(0, 0, 0, 0);
    &.el-menu--horizontal {
      border: 0;

      .el-menu-item {
        font-size: 18px;
        line-height: 32px;
        height: 32px;
        
        &.is-active{
          font-family: "AvenirNext-DemiBold";
        }
        &:hover {
          background: rgba(0, 0, 0, 0);
          color: #fff;
        }
        &:focus {
          background: rgba(0, 0, 0, 0);
          color: #fff;
        }
      }
      .el-menu-item.is-active {
        border: 0;
        color: #fff;
      }
    }
  }
  .arrow-icon {
    color: #979eb9;
    width: 15px;
    height: 32px;
    line-height: 32px;
  }
  .lang {
    margin-left: 10px;
    height: 32px;
    line-height: 32px;
    color: #979eb9;
  }
  &.white-theme {
    background: rgba(0, 0, 0, 0);
    .logo-container {
      .logo-box{
        color: #000000;
      }
      
    }

    .el-menu {
      background: rgba(0, 0, 0, 0);
      &.el-menu--horizontal {
        .el-menu-item {
          color: #5f5f5f;
          &:hover {
            background: rgba(0, 0, 0, 0);
            color: #000;
          }
          &:focus {
            background: rgba(0, 0, 0, 0);
            color: #000;
          }
          &.is-active {
            color: #000;
          }
        }
      }
    }
  }
}
</style>