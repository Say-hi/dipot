<template>
  <div>
    <div class='df dfb dfac'>
      <h3>{{ title }}</h3>
      <slot></slot>
    </div>
    <div class='df wrap mt10'>
      <div
        class='df list'
        style='width: 50%;'
        v-for='(item, index) in list'
        :key='index'
      >
        <div class='list-left bgccc fwb df dfac p510'>
          {{ item.t }}
        </div>
        <div class='list-right p510 df dfac p510'>
          {{ item.c }}
        </div>
      </div>
      <div v-if='!list.length' class='tac p10'>暂无相关信息哦~~</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuideList',
  props: {
    title: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: () => ([])
    }
  }
}
</script>

<style lang='less' scoped>
.wrap {
  flex-wrap: wrap;
}
.list {
  outline: 1px solid #eee;
  margin-bottom: 1px;
}
.list-left {
  width: 25%;
  justify-content: center;
  word-break: break-all;
  border-right: 1px solid #eee;
}
.list-right {
  justify-content: center;
  word-break: break-all;
}
</style>
