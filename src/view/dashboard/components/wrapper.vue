<template>
  <div class='wrapper'>
    <div class='top df p10'>
      <h4 class='title'>{{ this.title }}</h4>
      <div>
        <slot name='top'></slot>
        <Button>查看更多</Button>
      </div>
    </div>
    <div class='content p10'>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Wrapper',
  props: {
    title: {
      type: String,
      default: '标题'
    }
  }
}
</script>

<style lang='less' scoped>
  .wrapper {
    border: 1px solid #eee;
    border-radius: 5px;
    overflow: hidden;
  }
  .top {
    justify-content: space-between;
    align-items: center;
    background: #eee;
  }
  .content {
    background: #fff;
  }
</style>
