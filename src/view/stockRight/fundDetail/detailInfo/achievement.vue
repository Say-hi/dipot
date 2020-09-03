<template>
  <div>
    <Indicator />
    <ProfitTrend class='mt10' />
    <ProfitRange class='mt10' />
    <ProfitAnalysis class='mt10' />
    <ProfitDetail class='mt10' />
    <ProfitCost class='mt10' />
  </div>
</template>

<script>
import Indicator from './indicator'
import ProfitTrend from './profitTrend'
import ProfitRange from './profitRange'
import ProfitAnalysis from './profitAnalysis'
import ProfitDetail from './profitDetail'
import ProfitCost from './profitCost'
export default {
  name: 'Achievement',
  components: {
    Indicator,
    ProfitTrend,
    ProfitRange,
    ProfitAnalysis,
    ProfitDetail,
    ProfitCost
  }
}
</script>
