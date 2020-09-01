<template>
  <div class='wrap'>
    <div class='df dfb p10 bd1'>
      <h3>基金数据分析</h3>
      <Button size='small'>股权基金库</Button>
    </div>
    <div class='p10 df'>
      <div style='width: 20%;'>
        <div class='df dfac count p10'>
          <Icon size='60' type="md-analytics" />
          <div class='ml10'>
            <div>股权投资基金数</div>
            <div>
              <span class='f30'>23</span>
              <span>只</span>
            </div>
          </div>
        </div>
        <div class='df dfac count p10 mt10'>
          <Icon size='60' type="md-analytics" />
          <div class='ml10'>
            <div>在营股权基金数</div>
            <div>
              <span class='f30'>23</span>
              <span>只</span>
            </div>
          </div>
        </div>
      </div>
      <div style='width: 80%;'>
        <FundPie
          :value='pieData'
          style='width: 100%; height: 200px;'
          text='基金状态分布'
        />
      </div>
    </div>
    <AliveFundAnalysis class='mmt10' />
  </div>
</template>

<script>
import FundPie from './fundPie'
import AliveFundAnalysis from './aliveFundAnalysis'
export default {
  name: 'BaseAnalysis',
  components: {
    FundPie,
    AliveFundAnalysis
  },
  data () {
    return {
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

<style lang='less' scoped>
.wrap {
  border: 1px solid #eee;
  border-radius: 5px;
}
.count {
  border: 1px solid #eee;
  border-radius: 5px;
}
</style>
