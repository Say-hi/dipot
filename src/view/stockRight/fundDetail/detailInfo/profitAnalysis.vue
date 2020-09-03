<template>
  <div>
    <h3>收益成本分析</h3>
    <div class='df' style='justify-content: flex-end;'>
      <Button @click='_timeChoose(1)' :type='timeType === 1 ? "primary"  : "default"'>年度分析</Button>
      <Button @click='_timeChoose(2)' :type='timeType === 2 ? "primary"  : "default"'>月度分析</Button>
      <DatePicker
        :options='timeOptions'
        type="daterange"
        placement="bottom-end"
        placeholder="选择一段时间"
        class='ml10'
      ></DatePicker>
    </div>
    <charts
      :option='chartOption'
      ref='char'
      style='width: 100%;height: 400px;'
    />
  </div>
</template>

<script>
import Charts from './charts.vue'
import { option5, option6 } from './config'
export default {
  name: 'ProfitAnalysis',
  components: {
    Charts
  },
  data () {
    return {
      timeOptions: {
        disabledDate (date) {
          return date && date.valueOf() > Date.now() - 86400000
        }
      },
      timeType: 1,
      dom: null,
      chartOption: ''
    }
  },
  methods: {
    _timeChoose (i) {
      this.timeType = i
      this.chartOption = option6
      this.$refs.char.init()
    }
  },
  beforeMount () {
    this.chartOption = option5
  }
}
</script>
