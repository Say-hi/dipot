<template>
  <div>
    <h2>审批信息--{{ $route.query.title }}</h2>
    <page-tab
      :url='url'
      :filter-data='filterData'
      @listData='_listData'
      ref='pageTab'
      class='mt10'
    >
      <Table
        v-if='pageData.lists'
        border
        stripe
        no-data-text='暂无相关数据'
        :columns='columns'
        :data='pageData.lists'
        class='mt10'
      >
      </Table>
    </page-tab>
  </div>
</template>

<script>
export default {
  name: 'ProgressDetail',
  data () {
    return {
      url: 'mission/progressDetail',
      filterData: {},
      columns: [
        {
          type: 'index',
          width: 70,
          title: '序号',
          align: 'center'
        },
        {
          title: '任务类型',
          key: 'mission_type',
          width: 100,
          align: 'center'
        },
        {
          title: '节点',
          key: 'point'
        },
        {
          title: '审批结果',
          key: 'result',
          width: 100,
          align: 'center'
        },
        {
          title: '审批意见',
          key: 'content'
        },
        {
          title: '接收时间',
          key: 'start_time',
          width: 170
        },
        {
          title: '完成时间',
          key: 'finish_time',
          width: 170
        },
        {
          title: '节点办理人',
          key: 'point_people'
        }
      ],
      pageData: ''
    }
  },
  methods: {
    _listData (data) {
      this.pageData = data
    }
  },
  mounted () {
    this.$refs.pageTab.init()
  }
}
</script>
