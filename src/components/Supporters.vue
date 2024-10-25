<template>
  <div class="container">
    <div class="sponsors">
      <div class="title">
        SUPPORTERS
      </div>
      <div class="list">
        <img class="item" src="../assets/sigse.png" alt="sigse" />
        <img class="item" src="../assets/huawei.jpg" alt="huawei" />
        <img class="item" src="../assets/HITACHI_LOGO.png" alt="hitachi" />
        <img class="item" src="../assets/Fujitsu.png" alt="Fujitsu" />
        <img class="item" src="../assets/2021_tiwaki_logo_landscape_alpha.png" alt="2021_tiwaki_logo_landscape_alpha" />
        <img class="item" src="../assets/iWing_Corporation_Logo.png" alt="iWing_Corporation" />
        <img class="item" src="../assets/QIAN_LOGO.png" alt="QIAN" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
//todo
</script>

<style lang="less" scoped>
.title {
  font-weight: bolder;
  margin-bottom: 15px;
}
@gap: 15px;
.container {
  color: #000;
  background-color: #ffffff;
  font-size: 20px;
  margin-top: 30px;
  padding: @gap;
  text-align: center;
  .sponsors {
    margin-bottom: @gap;
    .title {
      .title();
      div {
        width: 100px;
        margin: 0 auto;
        text-align: center;
        color: #d1d4e4;
        border-bottom: solid 3px red;
      }
    }
    .list {
      display: flex;
      flex-wrap: wrap;
      .item {
        flex: 0 0 25%;
        max-width: 25%;
        height: 250px;
        line-height: 300px;
        border: solid 1px #e0e5fa;
        padding: 10px 20px;
        cursor: pointer;
      }
      img {
        object-fit: contain;
        max-width: 100%;
      }
    }
  }
}
</style>
