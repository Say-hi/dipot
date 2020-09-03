<template>
  <div>
    <h3>定期报告</h3>
    <Search
      :disabled='disabled'
      :outClick='_searchClick'
      ref='search'
    />
    <page-tab
      v-model='disabled'
      :url='url'
      :filter-data='filterData'
      @listData='_listData'
      ref='pageTab'
      class='mt10'
    >
      <Row>
        <Col :span='2' :push='22'>
          <Button :disabled='disabled' type='primary'>批量下载</Button>
        </Col>
      </Row>
      <Table
        v-if='pageData'
        border
        stripe
        no-data-text='暂无相关数据'
        :columns='columns'
        :data='pageData'
        class='mt10'
      ></Table>
    </page-tab>
  </div>
</template>

<script>
import Search from './reportSearch'
export default {
  name: 'FundReport',
  components: {
    Search
  },
  data () {
    return {
      url: '/getMissionData',
      filterData: {},
      columns: [
        {
          type: 'index',
          title: '序号',
          width: 70,
          align: 'center'
        },
        {
          title: '报告名称',
          key: 'title'
        },
        {
          title: '发布时间',
          key: 'start_time',
          width: 200
        }
      ],
      pageData: '',
      disabled: true
    }
  },
  methods: {
    _searchClick (item) {
      this.filterData = Object.assign({}, this.filterData, item)
      this.$nextTick(() => {
        this.$refs.pageTab.init()
      })
    },
    _listData (data) {
      this.pageData = data.lists
    }
  },
  mounted () {
    this.$refs.pageTab.init()
  }
}
</script>
