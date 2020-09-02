<template>
  <div ref="dom" class="charts chart-pie"></div>
</template>

<script>
import echarts from 'echarts'
import { on, off } from '@/libs/tools'
export default {
  name: 'ProjectBar',
  props: {
    value: Array,
    Y: Array,
    text: String,
    legend: {
      type: Boolean,
      default: true
    }
  },
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
        let option = {
          title: {
            text: this.text,
            x: 'center',
            top: '0',
            textStyle: {
              fontSize: 22
            }
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          grid: {
            left: 30,
            top: 30,
            right: 60,
            bottom: 40,
            containLabel: true
          },
          legend: {
            data: this.value.map(item => item.name),
            bottom: 10,
            show: this.legend
          },
          xAxis: {
            position: 'top'
          },
          yAxis: {
            type: 'category',
            data: this.Y
          },
          series: this.value
        }
        !this.dom && (this.dom = echarts.init(this.$refs.dom))
        this.dom.setOption(option)
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
