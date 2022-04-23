<template>
  <article class="footer-container">
    
      <!-- <section class="footer-top">
        <div id="center-page">
      <div class="title">
        <span style="color: #7762ed">Subscribe </span>
        {{ footerConfig.title }}
      </div>
      <div class="content-1">{{ footerConfig.content1 }}</div>
      <el-input
        class="email-input"
        :placeholder="footerConfig.placeholder"
      ></el-input>
      <div class="op-container">
        <div class="op-btn">Subscribe</div>
        <div class="op-btn" style="margin-left:20px;">Sending...</div>
      </div>
      <div class="content-2">{{ footerConfig.content2 }}</div>
       </div>
    </section> -->
    <section class="footer-bottom">
      {{ footerConfig.bottomTxt }}
    </section>
   
    
  </article>
</template>

<script>
import footerConfig from "../config/footer";
export default {
  name: "footer-comp",
  data() {
    return {
      footerConfig,
    };
  },
};
</script>

<style lang="less">
.footer-container {
  // height: 508px;
  .footer-top {
    padding: 83px 200px 67px 200px;
    height: 425px;
    background: linear-gradient(to right, #1c1837, #2f1f3f);
    .title {
      font-size: 36px;
      color: #fff;
    }
    .content-1 {
      font-size: 24px;
      color: #5d6d7e;
      width: 647px;
    }
    .email-input {
      width: 500px;
      margin-top:20px;
      .el-input__inner {
        border-radius: 10px;
        height: 40px;
        &::placeholder {
          font-size: 18px;
          font-family: 'AvenirMedium';
          color:#A2A2A2;
          line-height:25px;
        }
        &::-webkit-input-placeholder {
          /* WebKit browsers 适配谷歌 */
          font-size: 18px;
           font-family: 'AvenirMedium';
          color:#A2A2A2;
          line-height:25px;
        }
        &:-moz-placeholder {
          /* Mozilla Firefox 4 to 18 适配火狐 */
          font-size: 18px;
           font-family: 'AvenirMedium';
          color:#A2A2A2;
          line-height:25px;
        }
        &::-moz-placeholder {
          /* Mozilla Firefox 19+ 适配火狐 */
          font-size: 18px;
           font-family: 'AvenirMedium';
          color:#A2A2A2;
          line-height:25px;
        }
        &:-ms-input-placeholder {
          /* Internet Explorer 10+  适配ie*/
          font-size: 18px;
           font-family: 'AvenirMedium';
          color:#A2A2A2;
          line-height:25px;
        }
      }
    }
    .op-container{
        margin-top:20px;
        .op-btn{
            cursor: pointer;
            text-align: center;
            background: rgba(119,98,237,1);
            border-radius:20px;
            width:150px;
            color:#fff;
            display: inline-block;
            padding:8px 20px;
        }
        
    }
    .content-2{
        margin-top:20px;
        font-family: 'PingFangMedium';       
        font-size:18px;
        color:#fff;
        height:25px;
        line-height:25px; 
    }
  }
  .footer-bottom {
    height: 83px;
    background: #7762ed;
    font-family: 'PingFangMedium';  
    font-size:18px;
    color:#fff; 
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>