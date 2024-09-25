<template>
  <div class="banner">
    <div class="background"></div>
    <div class="text">
      <h2 class="title font-lato">Future Advanced Testing Technology Workshop</h2>

      <h4 class="subtitle">Testing Technology and Practice in the age of LLM</h4>            <!-- <h2 class="title font-lato">Testing Technology and Practice in the age of LLM</h2>  -->
      <div class="tip font-merri">Tokyo, Japan, November 1st – 2nd, 2024</div>
      <div class="tip font-merri">
        <el-icon><Location /></el-icon>
        <a target="_blank" href="https://www.newotani.co.jp/en/makuhari/" class="location"
          >Hotel New Otani Makuhari</a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="less" scoped>
.banner {
  height: 30rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  :deep(.el-icon) {
    vertical-align: middle;
    margin-right: 5px;
  }
  .background {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background: url('@/assets/image/head.jpg') no-repeat center / cover;

    &::before {
      content: '';
      display: block;
      background-color: rgba(33, 33, 33, 1);
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      opacity: 0.5;
    }
  }

  .subtitle {
  font-size: 0.8em; /* 或者使用具体的像素值，如 16px */
  font-weight: normal; /* 可选，使字体看起来更细 */
}

  .text {
    max-width: 100rem;
    padding: 0 3rem;
    color: #fff;
    .title {
      font-size: 4rem;
      font-weight: bold;
      line-height: 1.2;
      text-align: center;
    }
    .subtitle {
      text-align: center;
      margin-top: 1rem;
      font-size: 2.8rem;
      color: #f3f3f3;
      font-style: italic;

      a {
        color: #fff;
        text-decoration: underline;
      }
    }
    .tip {
      margin-top: 1.6rem;
      text-align: center;
      font-size: 2rem;
    }
  }
}
</style>
