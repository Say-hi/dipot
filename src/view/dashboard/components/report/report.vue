<template>
  <div>
    <wrapper title='数据简报'>
      <div v-if='!report' class='pr p20'>
        <Spin fix size='large'></Spin>
      </div>
      <div v-if='!report' class='tac'>暂无相关数据</div>
      <Row>
        <div v-for='(item, key) in report' :key='key'>
          <Col v-if='item' :span='8'>
            <ReportItem :content='item' />
          </Col>
        </div>
      </Row>
    </wrapper>
  </div>
</template>

<script>
import { getReportData } from '_api/dashboard'
export default {
  name: 'Report',
  props: {
    span: {
      type: Number | String,
      default: 12
    }
  },
  data: () => ({
    report: ''
  }),
  components: {
    Wrapper: () => import('../wrapper'),
    ReportItem: () => import('./reportItem')
  },
  async created () {
    let res = await getReportData()
    this.report = res.data
  }
}
</script>
