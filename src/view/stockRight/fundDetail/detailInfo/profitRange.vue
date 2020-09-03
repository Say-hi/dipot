<template>
  <div>
    <h3>区间收益</h3>
    <div class='df' style='justify-content: flex-end;'>
      <Button @click='_timeChoose(1)' :type='timeType === 1 ? "primary"  : "default"'>区间收益</Button>
      <Button @click='_timeChoose(2)' :type='timeType === 2 ? "primary"  : "default"'>年度收益</Button>
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
import {option3, option4} from './config'
export default {
  name: 'ProfitRange',
  components: {
    Charts
  },
  data () {
    return {
      timeOptions: {
        disabledDate (date) {
          return date && date.valueOf() > Date.now() - 86400000;
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
      this.chartOption = option4
      this.$refs.char.init()
    }
  },
  beforeMount () {
    this.chartOption = option3
  }
}
</script>
