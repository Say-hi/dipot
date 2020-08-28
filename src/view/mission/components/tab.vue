<template>
  <div class='tabs df'>
    <div
      v-for='item in tabs'
      :key='item.typee'
      class='tabs-item dfc p20'
      :class='{active: activeType === item.type}'
      @click='tabChoose(item)'
    >
      <span class='ti-title'>{{ item.title }}</span>
      <span class='ti-count'>{{ item.count }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tab',
  props: {
    tabs: {
      type: Array,
      default: () => ([
        {
          title: '代办',
          count: '123',
          type: 1
        },
        {
          title: '已办未完结',
          count: '123',
          type: 2
        },
        {
          title: '已完结',
          count: '123',
          type: 3
        },
        {
          title: '发起未完结',
          count: '123',
          type: 4
        },
        {
          title: '发起已完结',
          count: '123',
          type: 5
        },
        {
          title: '知会',
          count: '123',
          type: 6
        },
        {
          title: '全部任务',
          count: '123',
          type: 7
        }
      ])
    }
  },
  data: () => ({
    activeType: 1
  }),
  methods: {
    tabChoose (item) {
      this.$emit('click', item)
      this.activeType = item.type
    }
  },
  mounted () {
    this.activeType = this.tabs[2].type
  }
}
</script>

<style lang='less' scoped>
.tabs {
  width: 100%;
}
.tabs-item {
  font-size: 15px;
  flex: 1;
  align-items: center;
  padding-bottom: 0;
  &.active {
    border-bottom: 2px solid rgb(157, 154, 154);
  }
  &:hover {
    background: #eee;
    color: #333;
  }
  .ti-count {
    font-size: 30px;
  }
}
</style>
