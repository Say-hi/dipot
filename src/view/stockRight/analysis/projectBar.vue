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
    text: String
  },
  data () {
    return {
      dom: null
    }
  },
  methods: {
    resize () {
      this.dom.resize()
    }
  },
  mounted () {
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
          right: 0,
          bottom: 40,
          containLabel: true
        },
        legend: {
          data: this.value.map(item => item.name),
          bottom: 10
        },
        xAxis: {
          // show: false,
          axisLabel: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: true
          }
        },
        yAxis: {
          type: 'category',
          data: ['已入库', '已立项', '已过会', '已签约', '已投资', '退出中', '已退出', '其他']
        },
        series: [
          {
            name: '投资一部',
            type: 'bar',
            stack: '1',
            data: [10, 20, 30]
          },
          {
            name: '投资二部',
            type: 'bar',
            stack: '1',
            data: [10, 20, 30]
          },
          {
            name: '投资三部',
            type: 'bar',
            stack: '1',
            data: [10, 20, 30],
            label: {
              show: true,
              position: 'right'
            }
          }
        ]
      }
      this.dom = echarts.init(this.$refs.dom)
      this.dom.setOption(option)
      on(window, 'resize', this.resize)
    })
  },
  beforeDestroy () {
    off(window, 'resize', this.resize)
  }
}
</script>
