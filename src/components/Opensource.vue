<template>
  <article class="opensource-page-content">
    <div class="header-contaienr">
      <Navigation :menuList="menuList" />
      <div id="center-page">
        <div class="title-container">
          <div class="title-img">
            <img :src="titleImg" />
          </div>
          <div>
            <div class="title-name">{{ openSourceConfig.title }}</div>
            <div class="title-content">{{ openSourceConfig.introduce }}</div>
            <div class="title-content-2">{{ openSourceConfig.introduce2 }}</div>
          </div>
        </div>
        <div class="subtitle-container">
          <div class="left-module"></div>
          <div class="right-module">
            <div class="subtitle-name">{{ openSourceConfig.subTitle }}</div>
            <div class="subtitle-content">
              {{ openSourceConfig.subIntroduce }}
            </div>
            <div class="github-btn" @click="$_gotoGithub">
              <img :src="githubImg" />
              <div class="txt">GitHub</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="learn-container">
      <div id="center-page">
        <div class="learn-title">{{ openSourceConfig.learnTitle }}</div>
        <div class="learn-list-container">
          <div
            v-for="(item, index) in openSourceConfig.blogList"
            :key="index"
            class="item-container"
          >
            <div class="blog-img">
              <img :src="learnImg1" />
            </div>
            <div class="blog-title">{{ item.title }}</div>
            <div class="blog-content">{{ item.content }}</div>
            <div class="link" @click="$_gotoLink(item)">
              {{ item.linkTitle }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card-container">
      <div class="concat-us-card">
        <div class="concat-title">{{ openSourceConfig.concatTitle }}</div>
        <div class="concat-detail">
          <!-- <div class="phone-item">
            <img :src="phoneImg" />
            <div class="txt">{{ openSourceConfig.concatPhone }}</div>
          </div> -->
          <div class="email-item">
            <img :src="emailImg" />
            <div class="txt">{{ openSourceConfig.concatEmail }}</div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import openSourceConfig from "@/config/opensource";
import Navigation from "@/components/Navigation.vue";
export default {
  name: "open-source",
  components: {
    Navigation,
  },
  data() {
    return {
      openSourceConfig,
      titleImg: require("@/assets/opensource_title.png"),
      githubImg: require("@/assets/github.png"),
      learnImg1: require("@/assets/learn_img_1.png"),
      phoneImg: require("@/assets/phone.png"),
      emailImg: require("@/assets/email.png"),
      menuList: [
        {
          path: "/products",
          name: "Products",
        },
        {
          path: "/open-source",
          name: "Open-source",
        },
        {
          path: "/compony",
          name: "Company",
        },
      ],
    };
  },
  methods: {
    $_gotoGithub() {
      window.open(openSourceConfig.githubUrl, "_blank");
    },
    $_gotoLink(item) {
      window.open(item.linkUrl, "_blank");
    },
  },
};
</script>

<style lang="less">
.opensource-page-content {
  .header-contaienr {
    background: url("@/assets/opensource_bg_1.png") no-repeat;
    background-size: 100% 100%;
    .title-container {
      display: flex;
      height: 370px;
      padding-top: 80px;
      .title-img {
        flex-basis: 250px;
        img {
          float: right;
          margin-right: 41px;
          margin-top: 20px;
        }
      }
      .title-name {
        font-size: 48px;
        height: 77px;
        line-height: 77px;
        font-family: "AvenirNext-DemiBold";
      }
      .title-content {
        font-size: 24px;
        height: 77px;
        line-height: 34.5px;
        width: 600px;
      }
      .title-content-2 {
        margin-top: 20px;
        color: #808080;
        font-size: 20px;
        height: 27px;
        line-height: 27px;
      }
    }
    .subtitle-container {
      display: flex;
      height: 370px;
      .left-module {
        flex: 1;
      }
      .right-module {
        flex: 1;
        padding-top: 120px;
        padding-left: 180px;
        .subtitle-name {
          font-size: 36px;
          height: 49px;
          line-height: 49px;
        }
        .subtitle-content {
          font-size: 20px;
          height: 27px;
          line-height: 27px;
          color: #6e6e6e;
          margin-top: 7px;
        }
        .github-btn {
          margin-top: 42px;
          width: 120px;
          height: 32px;
          border-radius: 16px;
          background: #000;
          display: flex;
          align-items: center;
          padding: 3px 5px;
          .txt {
            font-size: 18px;
            color: #fff;
            line-height: 25px;
            margin-left: 9px;
          }
        }
      }
    }
  }
  .learn-container {
    height: 540px;
    .learn-title {
      text-align: center;
      margin-top: 94px;
      font-size: 36px;
      color: #000;
      height: 49px;
      line-height: 49px;
      margin-bottom: 60px;
    }
    .learn-list-container {
      display: flex;
      margin: 0 100px;
      justify-content: space-around;
      .item-container {
        background: #ffffff;
        box-shadow: 0px 2px 4px 4px rgba(214, 214, 214, 0.5);
        border-radius: 4px;
        width: 313px;
        height: 299px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .blog-img {
          height: 128px;
          display: flex;
          align-items: center;
        }
        .blog-title {
          color: #191919;
          font-size: 24px;
          height: 33px;
          line-height: 33px;
        }
        .blog-content {
          font-size: 18px;
          color: #7f7f7f;
          height: 44px;
          line-height: 22px;
          margin: 11px 30px 0 40px;
        }
        .link {
          margin-top: 33px;
          color: #7762ed;
          font-size: 18px;
          height: 33px;
          line-height: 24px;
          cursor: pointer;
        }
      }
    }
  }
  .card-container {
    height: 239px;
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
    .concat-us-card {
      width: 944px;
      height: 229px;
      background: url("@/assets/opensource_bg_2.png");

      display: flex;
      border-radius: 10px;
      .concat-title {
        flex: 1;
        font-size: 42px;
        color: #fff;
        height: 56px;
        line-height: 56px;
        margin-top: 69px;
        margin-left: 104px;
        font-family: 'AvenirNext-Bold';
      }
      .concat-detail {
        flex: 1;
        display: flex;
        justify-content: center;
        flex-direction: column;
        font-family: 'AvenirNext-DemiBold';

        img {
          margin-right: 20px;
        }
        .txt {
          color: #fff;
          font-size: 24px;
          line-height: 24px;
        }
        .phone-item {
          display: flex;
          align-items: center;
          height: 40px;
        }
        .email-item {
          display: flex;
          align-items: center;
          height: 40px;
        }
      }
    }
  }
}
</style>