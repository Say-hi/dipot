<template>
  <div>
    <AnalysisTop />
    <FundAnalysis class='mt10' />
  </div>
</template>

<script>
import AnalysisTop from './analysis/analysisTop'
import FundAnalysis from './analysis/fundAnalysis'

export default {
  name: 'analysis',
  components: {
    AnalysisTop,
    FundAnalysis
  }
}
</script>
