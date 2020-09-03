<template>
  <div>
    <h3>收益成本</h3>
    <div class='df' style='justify-content: flex-end;'>
      <DatePicker
        :options='timeOptions'
        type="daterange"
        placement="bottom-end"
        placeholder="选择一段时间"
        class='ml10'
      ></DatePicker>
    </div>
    <div class='df'>
      <FundPie
        :value='pieData'
        style='width: 49%; height: 200px;'
        text='基金收益组成'
      />
      <FundPie
        :value='pieData'
        style='width: 49%; height: 200px;'
        text='基金成本组成'
      />
    </div>
  </div>
</template>

<script>
import FundPie from '../../analysis/fundPie'
export default {
  name: 'ProfitCost',
  components: {
    FundPie
  },
  data () {
    return {
      timeOptions: {
        disabledDate (date) {
          return date && date.valueOf() > Date.now() - 86400000;
        }
      },
      pieData: [
        { value: 335, name: '投资一部' },
        { value: 456, name: '投资二部' },
        { value: 4567, name: '投资三部' },
        { value: 123, name: '投资四部' },
        { value: 4567, name: '投资5部' },
        { value: 123, name: '投资6部' }
      ]
    }
  }
}
</script>

<style>

</style>