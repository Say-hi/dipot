<template>
  <div ref="dom" class="charts chart-pie"></div>
</template>

<script>
import echarts from 'echarts'
import { on, off } from '@/libs/tools'
export default {
  name: 'FundPie',
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
    },
    getText (name) {
      let all = 0
      let temp = this.value.filter(item => {
        if (item.name === name) return item
      })[0]
      this.value.forEach(item => {
        all += +item.value
      })
      return `${name} ${temp.value}只 ${(temp.value / all * 100).toFixed(2)}%`
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
            fontSize: 25
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: [
          {
            left: '40%',
            y: 'center',
            data: this.value.map(item => item.name),
            formatter: (name) => {
              return this.getText(name)
            },
            itemGap: 30,
            icon: 'roundRect'
          }
        ],
        series: [
          {
            name: this.text,
            type: 'pie',
            radius: '80%',
            center: ['20%', '52%'],
            data: this.value,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
              return Math.random() * 200
            },
            label: {
              show: false
            },
            lableLine: {
              show: false
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
