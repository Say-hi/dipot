<template>
  <div>
    <div class='item title'>
      <div class='dot tac' :style='{background: color}'>88</div>
      <div class='line' :style='{background: color}'></div>
      <h2>已入库</h2>
    </div>
    <div v-for='item in data' :key='item.title' class='f12 item' data-color='#0094ff'>
      <div class='dot' :style='{background: color}'></div>
      <div class='line' :style='{background: color}'></div>
      <h3>标题</h3>
      <div>投资一部</div>
      <div>2020-04-30</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'equityProjectType',
  props: {
    color: {
      type: String,
      default: '#0094ff'
    }
  },
  data () {
    return {
      data: [
        {
          title: '123',
          type: '123',
          time: '123'
        },
        {
          title: '123123',
          type: '123',
          time: '123'
        }
      ]
    }
  }
}
</script>

<style lang='less' scoped>
  .item.title {
    line-height: 60px;
    padding: 0 5px 5px 40px;
    .dot {
      color: #fff;
      font-size: 18px;
      width: 30px;
      height: 30px;
      line-height: 32px;
      left: 0;
      top: 15px;
    }
    .line {
      top: 15px;
    }
  }
  .item {
    padding: 0 5px 0 33px;
    position: relative;
    .dot {
      position: absolute;
      top: 0;
      left: 8px;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      z-index: 1;
    }
    .line {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 15px;
      width: 2px;
    }
  }
</style>
