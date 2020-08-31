<template>
  <div>
    <Row>
      <Col v-for='(item, index) in 4' :key='index' :span='6'>
        <EquityProjectTypeColumn
          color='#f00'
        />
      </Col>
    </Row>
    <div class='p10 tac more'>
      <span>展开更多 <Icon type="ios-arrow-down" /></span>
    </div>
    <Row>
      <Col v-for='item in 4' :key='item' :span='6'>
        <EquityProjectTypeColumn
          color='#f00'
        />
      </Col>
    </Row>
    <div class='p10 tac more'>
      <span>展开更多 <Icon type="ios-arrow-down" /></span>
    </div>
  </div>
</template>

<script>
import EquityProjectTypeColumn from './equityProjectTypeColumn'
export default {
  name: 'equityProjectType',
  components: {
    EquityProjectTypeColumn
  },
  data () {
    return {}
  }
}
</script>

<style lang='less' scoped>
  .more {
    border: 1px solid #0094ff;
  }
</style>
