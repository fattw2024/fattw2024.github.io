<template>
  <div class="container">
    <div class="sponsors">
      <div class="title">
        SUPPORTERS
        <div>(pending)</div>
      </div>
      <div class="list">
        <!-- <img class="item" src="../assets/sigse.png" alt="sigse" /> -->
        <div class="item">Company1</div>
        <div class="item">Company2</div>
        <div class="item">Company3</div>
        <div class="item">Company4</div>
        <!-- <img class="item" src="../assets/huawei.png" alt="huawei" /> -->
        <div class="item">Company5</div>
        <div class="item">Company6</div>
        <div class="item">Company7</div>
        <div class="item">Company8</div>
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
  background-color: #f6f7fd;
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
        height: 150px;
        line-height: 150px;
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
