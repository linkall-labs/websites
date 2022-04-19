<template>
  <article class="products-page-container">
    <div class="common-background">
      <Navigation :menuList="menuList" />
      <div class="title-container">
        <div style="position: relative; z-index: 2">
          <div class="title-name">{{ productsConfig.title }}</div>
          <div class="title-content">{{ productsConfig.introduce }}</div>
        </div>
        <div class="feature-list-container">
          <div
            class="feature-item"
            v-for="(item, index) in productsConfig.featureTxts"
            :key="item"
          >
            <div class="feature-img">
              <img :src="featureImgList[index]" />
            </div>

            <div class="feature-name">{{ item }}</div>
          </div>
        </div>
        <div class="background-bg"></div>
      </div>
      <div class="diliver-container">
        <img :src="diliverImg" />
      </div>
      <div class="subtitle-container">
        <div class="head-container">
          <div class="subtitle-name">{{ productsConfig.subTitle }}</div>
          <div class="subtitle-content">{{ productsConfig.subIntroduce }}</div>
        </div>
        <div class="sub-feature-list-container">
          <div
            class="sub-feature-item"
            v-for="(item, index) in productsConfig.subFeatureTxts"
            :key="item.title"
          >
            <div class="sub-feature-img">
              <img :src="subFeatureImgList[index]" />
            </div>
            <div class="card-container">
              <div class="item-title">{{ item.title }}</div>
              <div class="item-content">{{ item.content }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="case-container">
      <div class="case-title">{{ productsConfig.casesTitle }}</div>
      <div class="case-content">{{ productsConfig.casesIntroduce }}</div>
      <div class="case-list-container">
        <div
          :class="['case-item', { 'cur-case-item': caseIndex === index }]"
          v-for="(item, index) in productsConfig.casesList"
          :key="item.name"
          @click="$_handleCaseSwitch(index)"
        >
          {{ item.name }}
        </div>
      </div>
      <div class="case-detail">
        <div class="detail-img">
          <img :src="detaiImg[caseIndex]" />
        </div>
        <article>
          <div class="title">
            {{ productsConfig.casesList[caseIndex].title }}
          </div>
          <div
            class="content"
            v-for="content in productsConfig.casesList[caseIndex].content"
            :key="content.slice(0, 10)"
          >
            {{ content }}
          </div>
        </article>
      </div>
    </div>
  </article>
</template>

<script>
import productsConfig from "@/config/products";
import Navigation from "@/components/Navigation.vue";
export default {
  name: "products-page",
  components: {
    Navigation,
  },
  data() {
    return {
      productsConfig,
      featureImgList: [
        require("@/assets/product_feature_1.png"),
        require("@/assets/product_feature_2.png"),
        require("@/assets/product_feature_3.png"),
      ],
      subFeatureImgList: [
        require("@/assets/product_sub_1.png"),
        require("@/assets/product_sub_2.png"),
        require("@/assets/product_sub_3.png")
      ],
      detaiImg: [
        require("@/assets/iot.png"),
        require("@/assets/data-integration.png"),
      ],
      diliverImg: require("@/assets/diliver_icon.png"),
      caseIndex: 0,
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
    $_handleCaseSwitch(index) {
      this.caseIndex = index;
    },
  },
};
</script>

<style lang="less">
.products-page-container {
  // background: #212844;
  // background: linear-gradient(to right, #31395b, #17192e);
  .common-background {
    background: url("@/assets/product_bg_2.png") no-repeat;
    background-size: 100% 100%;
  }

  .title-container {
    padding-top: 180px;
    position: relative;
    .title-name {
      margin-left: 239px;
      color: #fff;
      font-size: 62px;
    }
    .title-content {
      font-size: 32px;
      color: #fff;
      margin-left: 239px;
      width: 553px;
      margin-top: 60px;
    }
    .feature-list-container {
      height: 200px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 30px 300px;
      .feature-item {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        width: 300px;
        .feature-img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #3d4768;
        }
        .feature-name {
          font-size: 24px;
          line-height: 56px;
          color: #fff;
        }
      }
    }
    .background-bg {
      background-image: url("@/assets/product_bg.png");
      position: absolute;
      width: 614px;
      height: 569px;
      top: -80px;
      right: 5%;
      z-index: 1;
    }
  }
  .diliver-container {
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .subtitle-container {
    height: 800px;
    // background: #212844;

    .head-container {
      height: 143px;
      text-align: center;
      .subtitle-name {
        font-size: 32px;
        color: #fff;
      }
      .subtitle-content {
        margin-top: 30px;
        font-family: "PingFangRegular";
        font-size: 24px;
        color: #787e96;
      }
    }
    .sub-feature-list-container {
      height: 657px;
      display: flex;
      margin: 0 150px;
      justify-content: space-between;
      .sub-feature-item {
        position:relative;
        .sub-feature-img{
          position:absolute;
          left:50%;
          transform:translateX(-50%);
          top:55px;
        }
        .card-container {
          margin-top:150px;
          padding-top:80px;
          background: url("@/assets/product_card.png");
          background-size: 100% 100%;
          height: 300px;
          width: 346px;
          .item-title {
            font-size: 20px;
            color: #fff;
            text-align: center;
          }
          .item-content {
            margin-top: 18px;
            font-size: 18px;
            color: #959bb3;
            text-align: center;
            font-family: "PingFangRegular";
          }
        }
      }
    }
  }
  .case-container {
    padding-top: 50px;
    background: url("@/assets/product_bg_3.png") no-repeat;
    background-size: 100% 100%;
    .case-title {
      height: 47px;
      line-height: 47px;
      font-size: 32px;
      color: #000;
      text-align: center;
    }
    .case-content {
      color: #5d6d7e;
      font-size: 24px;
      height: 33px;
      line-height: 33px;
      text-align: center;
    }
    .case-list-container {
      display: flex;
      margin: 70px 250px;
      justify-content: center;
      height: 40px;
      .case-item {
        color: #586e80;
        font-size: 24px;
        margin-right: 50px;
        border: 3px solid rgba(0, 0, 0, 0);
        padding: 3px 20px;
        cursor: pointer;
        &:hover {
          border: 3px solid rgba(119, 98, 237, 1);
          border-radius: 20px;
        }
        &.cur-case-item {
          background: rgba(119, 98, 237, 1);
          color: #fff;
          border-radius: 20px;
        }
      }
    }
    .case-detail {
      display: flex;
      width: 100%;
      height: 900px;
      // background: linear-gradient(to right, #1c1837, #2f1f3f);
      z-index: -1;
      .detail-img {
        flex: 1;
        padding-top: 80px;
        img {
          float: right;
          margin-right: 50px;
        }
      }
      article {
        flex: 1;
        .title {
          color: #000;
          font-size: 56px;
          margin-bottom: 45px;
        }
        .content {
          line-height: 30px;
          font-size: 24px;
          color: #5d6d7e;
          margin-bottom: 40px;
        }
      }
    }
  }
}
</style>