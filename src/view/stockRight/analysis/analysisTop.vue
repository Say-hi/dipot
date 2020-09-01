<template>
  <div class='df wrap p20'>
    <div
      class='dfc tac flex1'
      v-for='(val, key) in tabData'
      :key='key'
    >
      <div >
        <Icon :size='30' type="ios-alarm" />
        <span>打法胜多负少大</span>
      </div>
      <div class='df' style='justify-content: center; align-items: baseline;'>
        <CountTo
        :end='val'
        usegroup
        class='f28'
       />
       <span>只</span>
      </div>
    </div>
  </div>
</template>

<script>
import CountTo from '@/components/count-to'
import { getTabData } from '_api/stockRight'
export default {
  name: 'AnalysisTop',
  components: {
    CountTo
  },
  data () {
    return {
      tabData: ''
    }
  },
  async mounted () {
    let res = await getTabData()
    this.tabData = res.data
  }
}
</script>

<style lang='less' scoped>
.wrap {
  border: 1px solid orange;
  border-radius: 5px;
  position: relative;
  &:before {
    content: '股权业务数据概览';
    position: absolute;
    display: inline-block;
    top: 0;
    left: 50%;
    padding: 5px 20px;
    background: orange;
    border-radius: 5px;
    transform: translate(-50%, -50%);
    color: #fff;
    font-weight: 800;
  }
}
</style>
