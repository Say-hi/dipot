<template>
  <div class='tabs df'>
    <div
      v-for='item in tabs'
      :key='item.typee'
      class='tabs-item dfc'
      :class='{active: !onlyShow && activeType === item.type, showOnly: onlyShow}'
      @click='tabChoose(item)'
    >
      <span class='ti-title'>{{ item.title }}</span>
      <count-to class='ti-count' :end='+item.count' />
    </div>
  </div>
</template>

<script>
import CountTo from '@/components/count-to/index'
export default {
  name: 'Tab',
  components: {
    CountTo
  },
  props: {
    tabs: {
      type: Array,
      default: () => ([])
    },
    outClick: {
      type: Function,
      default: function (item) {}
    },
    onlyShow: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    activeType: 1
  }),
  methods: {
    tabChoose (item) {
      if (!this.onlyShow) {
        this._click(item)
        this.activeType = item.type
      }
    },
    _click (item = this.tabs[0]) {
      this.outClick(item)
      this.$emit('click', item)
    }
  },
  mounted () {
    if (!this.onlyShow) {
      this.activeType = this.tabs[0].type
      this._click()
    }
  }
}
</script>

<style lang='less' scoped>
@import url('~@/assets/styles/variable.less');
.tabs {
  width: 100%;
}
.tabs-item {
  font-size: 15px;
  flex: 1;
  align-items: center;
  padding-bottom: 0;
  transition: all 0.3s;
  border-bottom: 2px solid #fff;
  cursor: pointer;
  &.showOnly {
    cursor: inherit;
    border-right: 1px solid #eee;
    &:nth-last-child(1) {
      border-right: none;
    }
    &:hover {
    background: inherit;
    color: inherit;
  }
  }
  &.active {
    border-bottom-color: rgb(157, 154, 154);
    color: $mainColor;
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
