<template>
  <div class="container">
    <div class="sponsors">
      <div class="title">Sponsors</div>
      <div class="list">
        <img class="item" src="../assets/sigse.png" alt="sigse" />
        <img class="item" src="../assets/sigse.png" alt="sigse" />
        <img class="item" src="../assets/sigse.png" alt="sigse" />
        <img class="item" src="../assets/sigse.png" alt="sigse" />
        <img class="item" src="../assets/sigse.png" alt="sigse" />
        <img class="item" src="../assets/sigse.png" alt="sigse" />
        <img class="item" src="../assets/sigse.png" alt="sigse" />
        <img class="item" src="../assets/sigse.png" alt="sigse" />
      </div>
    </div>
    <div class="supporter">
      <div class="title">Supporter</div>
      <div class="list">
        <img src="../assets/sigse.png" alt="sigse" />
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
    }
    .list {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: @gap;
      .item {
        flex: 1;
      }
      img {
        width: 200px;
      }
    }
  }
  .supporter {
    .title {
      .title();
    }
    .list {
      display: flex;
      justify-content: center;
      text-align: center;
      img {
        width: 350px;
      }
    }
  }
}
</style>
