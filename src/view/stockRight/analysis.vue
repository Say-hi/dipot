<template>
  <div>
    <AnalysisTop />
    <FundAnalysis class='mt10' />
    <ProjectAnalysis class='mt10' />
  </div>
</template>

<script>
import AnalysisTop from './analysis/analysisTop'
import FundAnalysis from './analysis/fundAnalysis'
import ProjectAnalysis from './analysis/projectAnalysis'

export default {
  name: 'analysis',
  components: {
    AnalysisTop,
    FundAnalysis,
    ProjectAnalysis
  }
}
</script>
