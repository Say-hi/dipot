<template>
  <div class='top'>
    <h3 class="top-left">工作台</h3>{{this.$store.state.user.userName}}，您好，今天是{{ solarDate }}~
  </div>
</template>

<script>
import { Solar, Lunar } from 'lunar-javascript'
export default {
  name: 'TopTime',
  computed: {
    solarDate () {
      let d = Solar.fromDate(new Date())
      let l = Lunar.fromDate(new Date())
      let D = Lunar.fromYmd(l.getYear(), l.getMonth(), l.getDay())
      let j = D.getJie() || D.getQi()
      return `${d.getYear()}年${d.getMonth()}月${d.getDay()}日星期${d.getWeekInChinese()}, 农历${l.getMonthInChinese()}月${l.getDayInChinese()}${j}`
    }
  }
}
</script>
<style lang="less" scoped>
  .top {
    display: flex;
    align-items: center;
    .top-left {
      padding-right: 5px;
      margin-right: 5px;
      border-right: 1px solid #000;
    }
  }
</style>
