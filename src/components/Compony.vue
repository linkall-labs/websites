<template>
  <article class="compony-page-container">
    <div class="title-container">
      <Navigation :menuList="menuList" />
      <div id="center-page" class="title-box">
        <img class="bg-layer" :src="bgImage">
        <div class="content-layer">
          <div class="title-name">{{ componyConfig.title }}</div>
          <div class="title-content">{{ componyConfig.introduce }}</div>
        </div>
        
      </div>
    </div>
    <div class="compony-introduce-container">
      <div id="center-page">
         <div
        class="introduce-item"
        v-for="(item, index) in componyConfig.componyIndroduceList"
        :key="item.title"
      >
        <div class="introduce-image">
          <img :src="introduceImgList[index]" />
        </div>
        <div class="introduce-page">
          <div class="introduce-title">{{ item.title }}</div>
          <div class="introduce-subtitle">{{ item.subtitle }}</div>
          <div class="introduce-content">{{ item.content }}</div>
        </div>
      </div>
      </div>
     
    </div>
    <div class="career-container">
      <div id="center-page">
        <div class="career-box">
          <div class="career-theme">{{ componyConfig.careersTheme }}</div>
      <div class="career-page">
        <div class="career-article">
          <div class="title">{{ componyConfig.careersTitle }}</div>
          <div class="content">{{ componyConfig.careersIntroduce }}</div>
        </div>
        <div class="career-image">
          <!-- <img :src="photoWallImg" class="photo-wall"/> -->
          <img :src="peopleImg" class="people-img"/>
        </div>
      </div>
        </div>
      
      <!-- <div class="position-container">
        <div class="position-title">{{ componyConfig.positionsTitle }}</div>
        <div
          :class="['position-item', { 'cur-item': index === curIndex }]"
          v-for="(item, index) in componyConfig.positionsList"
          :key="item.name"
          @click="
            () => {
              curIndex = index;
            }
          "
        >
          {{ item.name }}
        </div>
        <div class="position-introduce">
          <div class="left-module">
            <div class="image-module">
              <img :src="positionImg1" />
            </div>
            <div class="article-page">
              <div class="title"></div>
              <div class="content"></div>
            </div>
          </div>
          <div class="right-module">
            <div class="image-module">
              <img :src="positionImg2" />
            </div>
            <div class="article-page">
              <div class="title"></div>
              <div class="content"></div>
            </div>
          </div>
        </div>
      </div> -->
      </div>
    </div>
    <!-- <div class="contact-us-container">
      <div class="top-page"></div>
      <div class="bottom-page"></div>
      <div class="contact-us-page">
        <div class="contact-title">{{ componyConfig.contactTitle }}</div>
        <div class="contact-content">{{ componyConfig.contactIntroduce }}</div>
        <el-form class="contact-form">
          <el-row :gutter="20">
            <el-col
              v-for="item in componyConfig.contactForm"
              :span="item.col"
              :key="item.key"
            >
              <el-form-item>
                <el-input
                  v-model="form[item.key]"
                  :placeholder="item.placeholder"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div> -->
  </article>
</template>

<script>
import componyConfig from "@/config/compony";
import Navigation from "@/components/Navigation.vue";
export default {
  name: "compony-page",
  components: {
    Navigation,
  },
  data() {
    return {
      componyConfig,
      form: {
        firstname: "",
        lastname: "",
        email: "",
        compony: "",
        phone: "",
        region: "",
        other: "",
      },
      curIndex: 0,
      peopleImg:require('@/assets/people.png'),
      bgImage:require('@/assets/compony_bg_1_2.png'),
      introduceImgList: [
        require("@/assets/compony_feature_1.png"),
        require("@/assets/compony_feature_2.png"),
        require("@/assets/compony_feature_3.png"),
      ],
      photoWallImg: require("@/assets/photo_wall.png"),
      positionImg1: require("@/assets/position_icon_1.png"),
      positionImg2: require("@/assets/position_icon_2.png"),
      menuList: [
        {
          path: "/products",
          name: "Products",
        },
        {
          path: "/community",
          name: "Community",
        },
        {
          path: "/compony",
          name: "Company",
        },
      ],
    };
  },
};
</script>

<style lang="less">
.compony-page-container {
  .title-container {
    height: 553px;
    // background: linear-gradient(to right, #31395b, #17192e);
    background: url("@/assets/compony_bg_1_1.png") no-repeat;
    background-size: 100% 100%;
    
    .title-box {
      
      position: relative;
      .bg-layer{
      position: absolute;
      z-index:1;
      right:100px;
    }
    .content-layer{
      position: relative;
      z-index:2;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
      .title-name {
        font-size: 48px;
        color: #fff;
        margin-top: 54px;
      }
      .title-content {
        margin-top: 30px;
        color: #b2c2ed;
        font-size: 18px;
        text-align: center;
        line-height: 30px;
        width: 590px;
      }
    }
  }
  .compony-introduce-container {
    background: #fff;
    margin-top: 83px;
    .introduce-item {
      overflow: hidden;
      margin-bottom:85px;
      .introduce-page {
        background: #F7F7F7;
        width:607px;
        padding:19px 65px 26px 46px;
        border-radius: 20px;
        .introduce-title {
          color: #000;
          font-size: 36px;
          line-height: 61px;
          font-family: 'AvenirNext-DemiBold';
        }
        .introduce-subtitle {
          color: #000;
          font-size: 18px;
          line-height: 30px;
          width: 487px;
        }
        .introduce-content {
          margin-top: 30px;
          font-size: 18px;
          color: #7c7c7c;
          line-height: 22px;
          width: 472px;
          font-family: 'AvenirNext-Regular'
        }
      }
      &:nth-of-type(odd) {
        .introduce-image {
          float: left;
          // width: 50%;
          height: 100%;
          padding-left: 229px;
          margin-right:56px;
          img{
            width:225px;
            height:205px;
          }
        }
        .introduce-page {
          float: left;
          // width: 50%;
        }
      }

      &:nth-of-type(even) {
        .introduce-image {
          float: right;
          // width: 50%;
          height: 100%;
          margin-right: 198px;
        }
        .introduce-page {
          float: right;
          margin-right:67px;
          // width: 50%;
        }
      }
    }
  }
  .career-container {
    // height: 895px;
    height:400px;
    margin-top: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .career-box{
      margin:0 100px;
    }
    .career-theme {
      font-family: 'AvenirNext-DemiBold';
      font-size: 48px;
      color: #000;
      height: 66px;
      line-height: 66px;
      text-align: center;
    }
    .career-page {
      display: flex;
      .career-article {
        width: 560px;
        .title {
          font-family: 'AvenirNext-DemiBold';
          font-size: 36px;
          color: #000;
          height: 49px;
          line-height: 49px;
        }
        .content {
          font-family: 'AvenirNext-Regular';
          margin-top: 14px;
          font-size: 20px;
          line-height: 24px;
          color: #000;
        }
      }
      .career-image {
        margin-left: 130px;
        flex: 1;
        position: relative;
        background: url('@/assets/photo_wall.png') no-repeat;
        height:192px;
        // .photo-wall{
        //   position: relative;
        //   z-index:1
        // }
        .people-img{
          position: absolute;
          z-index:2;
          left:40%;
          top:50%;
          transform: translate(-50%,-50%);
        }
      }
    }
    .position-container {
      margin-top: 60px;
      .position-title {
        font-size: 24px;
        color: #000;
        height: 33px;
        line-height: 33px;
        margin-bottom: 22px;
      }
      .position-item {
        margin-bottom: 14px;
        width: 887px;
        background: #f7f7f7;
        height: 72px;
        padding: 21px 0 18px 42px;
        font-size: 24px;
        color: #5b5b5b;
        cursor: pointer;
        &.cur-item {
          color: #000;
        }
      }
      .position-introduce {
        display: flex;
        margin-top: 43px;
        .image-module {
          padding-left: 50px;
          width: 90px;
        }
        .article-page {
          .title {
            font-size: 22px;
            color: #000;
            line-height: 30px;
          }
          .content {
            font-size: 18px;
            color: #4d4d4d;
            line-height: 22px;
          }
        }
        .left-module {
          flex: 1;
          display: flex;
        }
        .right-module {
          flex: 1;
        }
      }
    }
  }
  .contact-us-container {
    height: 804px;
    position: relative;
    .top-page {
      height: 402px;
      background: #7762ed;
    }
    .bottom-page {
      height: 402px;
    }
    .contact-us-page {
      position: absolute;
      width: 721px;
      height: 570px;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: #fff;
      z-index: 1;
      box-shadow: 0px 2px 4px 4px rgba(189, 189, 189, 0.5);
      padding: 73px 0 27px 0;
      .contact-title {
        font-size: 36px;
        height: 49px;
        line-height: 49px;
        text-align: center;
        color: #000;
      }
      .contact-content {
        font-size: 20px;
        color: #000;
        line-height: 24px;
        text-align: center;
        padding: 22px 52px;
      }
      .contact-form {
        padding: 34px 20px;
        .el-form-item {
          .el-input__inner {
            background: #eff0fa;
            &::placeholder {
              font-size: 16px;
              font-family: "PingFangRegular";
              color: #a2a2a2;
              line-height: 25px;
            }
            &::-webkit-input-placeholder {
              /* WebKit browsers 适配谷歌 */
              font-size: 16px;
              font-family: "PingFangRegular";
              color: #a2a2a2;
              line-height: 25px;
            }
            &:-moz-placeholder {
              /* Mozilla Firefox 4 to 18 适配火狐 */
              font-size: 16px;
              font-family: "PingFangRegular";
              color: #a2a2a2;
              line-height: 25px;
            }
            &::-moz-placeholder {
              /* Mozilla Firefox 19+ 适配火狐 */
              font-size: 16px;
              font-family: "PingFangRegular";
              color: #a2a2a2;
              line-height: 25px;
            }
            &:-ms-input-placeholder {
              /* Internet Explorer 10+  适配ie*/
              font-size: 16px;
              font-family: "PingFangRegular";
              color: #a2a2a2;
              line-height: 25px;
            }
          }
        }
      }
    }
  }
}
</style>