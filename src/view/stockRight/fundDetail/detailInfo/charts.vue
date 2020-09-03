<template>
  <div ref="dom" class="charts chart-pie"></div>
</template>

<script>
import echarts from 'echarts'
import { on, off } from '@/libs/tools'
export default {
  props: ['option'],
  data () {
    return {
      dom: null
    }
  },
  methods: {
    resize () {
      this.dom.resize()
    },
    init () {
      this.$nextTick(() => {
        !this.dom && (this.dom = echarts.init(this.$refs.dom))
        this.dom.setOption(this.option)
        !this.dom && on(window, 'resize', this.resize)
      })
    }
  },
  mounted () {
    this.init()
  },
  beforeDestroy () {
    off(window, 'resize', this.resize)
  }
}
</script>
