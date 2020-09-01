<template>
  <div class='df'>
    <div
      v-for='(item, index) of tab'
      :key='index'
      class='item'
      :class='{active: showIndex === index}'
      @click='_click(index)'
    >
      <div>
        <Icon type='ios-warning' :color='item.r' />
        <span>{{item.t}}</span>
      </div>
      <div>
        <span class='f30'>{{ item.c }}</span>
        <span v-if='index > 0'>/占{{ _calculate(item.c) }}%</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AlarmTab',
  data () {
    return {
      showIndex: 0,
      tab: [
        {
          t: '全部预警',
          c: 36,
          r: '#000'
        },
        {
          t: '红灯项目',
          c: 12,
          r: '#f00'
        },
        {
          t: '黄灯项目',
          c: 12,
          r: '#ff0'
        },
        {
          t: '绿灯项目',
          c: 12,
          r: '#0094ff'
        }
      ]
    }
  },
  methods: {
    _calculate (num) {
      return (num / this.tab[0].c * 100).toFixed(2)
    },
    _click (index) {
      this.showIndex = index
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style lang='less' scoped>
.item {
  flex: 25%;
  text-align: center;
  cursor: pointer;
  &.active {
    background: #eee;
  }
  &:hover {
    background: #eee;
  }
}
</style>
