<template>
  <div class='mission-wrap'>
    <tab
      :tabs='tabs'
      :outClick='_tabClick'
    ></tab>
    <search :disabled='disabled' :outClick='_searchClick' ref='search'></search>
    <page-tab
      v-model='disabled'
      :url='url'
      :filter-data='filterData'
      @listData='_listData'
      ref='pageTab'
      class='mt10'
    >
      <Row :gutter='16'>
        <Col :span='2'>
          <Button :disabled='disabled' type='primary'>新建流程</Button>
        </Col>
        <Col :span='1'>
          <Button :disabled='disabled' type='primary'>导出</Button>
        </Col>
      </Row>
      <Table
        v-if='pageData.lists'
        border
        stripe
        no-data-text='暂无相关数据'
        :columns='columns'
        :data='pageData.lists'
        class='mt10'
      >
        <template
          #action='{row}'
        >
            <Button
              type='primary'
              size='small'
              style='margin-right: 5px'
              @click='_show(row)'
            >办理</Button>
<!--          <Button-->
<!--            type='error'-->
<!--            size='small'-->
<!--            style='margin-right: 5px'-->
<!--            @click='_show(index)'-->
<!--          >撤回</Button>-->
<!--          <Button-->
<!--            type='info'-->
<!--            size='small'-->
<!--            style='margin-right: 5px'-->
<!--            @click='_show(index)'-->
<!--          >重新发起</Button>-->
        </template>
      </Table>
    </page-tab>
  </div>
</template>

<script>
import Tab from '@/components/tabs/index'
import Search from './components/search'
export default {
  name: 'Mission',
  data: () => ({
    url: '/getMissionData',
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
        title: '流程标题',
        key: 'title',
        width: 250,
        resizable: true
      },
      {
        title: '流程类型',
        key: 'progress_type'
      },
      {
        title: '办理节点',
        key: 'point'
      },
      {
        title: '发起人',
        key: 'people'
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
        title: '当前流程办理人',
        key: 'point_people'
      },
      {
        title: '流程状态',
        key: 'progress_status'
      },
      {
        title: '操作',
        slot: 'action',
        width: 80,
        align: 'center'
      }
    ],
    tabs: [
      {
        title: '代办',
        count: '123',
        type: 1
      },
      {
        title: '已办未完结',
        count: '123',
        type: 2
      },
      {
        title: '已完结',
        count: '123',
        type: 3
      },
      {
        title: '发起未完结',
        count: '123',
        type: 4
      },
      {
        title: '发起已完结',
        count: '123',
        type: 5
      },
      {
        title: '知会',
        count: '123',
        type: 6
      },
      {
        title: '全部任务',
        count: '123',
        type: 7
      }
    ],
    pageData: '',
    disabled: true
  }),
  components: {
    Tab,
    Search
  },
  methods: {
    _show (row) {
      // this.$Modal.info({
      //   title: 'User Info',
      //   content: `${index}`
      // })
      this.$router.push({
        name: 'progressDetail',
        params: {
          id: row.id
        },
        query: {
          title: row.title
        }
      })
    },
    _listData (data) {
      this.pageData = data
    },
    _tabClick (item) {
      this.filterData.type = item.type
      this.$refs.pageTab.init()
    },
    _searchClick (item) {
      this.filterData = Object.assign({}, this.filterData, item)
      this.$nextTick(() => {
        this.$refs.pageTab.init()
      })
    }
  }
}
</script>
