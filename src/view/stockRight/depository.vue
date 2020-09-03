<template>
  <div>
    <Tabs
      v-if='tabs'
      :tabs='tabs'
      :outClick='_tabClick'
    />
    <Search
      :disabled='disabled'
      :outClick='_searchClick'
    />
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
          <Button :disabled='disabled' type='primary'>设立新基金</Button>
        </Col>
        <Col :span='2'>
          <Button :disabled='disabled' type='primary'>更多流程</Button>
        </Col>
        <Col :span='2'>
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
          >详情</Button>
          <Dropdown size='small'>
            <a href="javascript:void(0)">
              更多<Icon type="ios-arrow-down"></Icon>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem>设立手续办理/移交</DropdownItem>
              <DropdownItem>三会上会</DropdownItem>
              <DropdownItem>收益划拨</DropdownItem>
              <DropdownItem>档案移交</DropdownItem>
              <DropdownItem>基金报告导出</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </template>
      </Table>
    </page-tab>
  </div>
</template>

<script>
import Tabs from '@/components/tabs'
import Search from './depository/search'
import { getDepositoryTab } from '_api/stockRight'
export default {
  name: 'Depository',
  components: {
    Tabs,
    Search
  },
  data () {
    return {
      tabs: '',
      url: '/getDepositoryData',
      filterData: {},
      disabled: true,
      columns: [
        {
          type: 'index',
          width: 70,
          title: '序号',
          align: 'center',
          fixed: 'left'
        },
        {
          title: '基金简称',
          key: 'name',
          width: 150
        },
        {
          title: '基金全称',
          key: 'fullName',
          minWidth: 150
        },
        {
          title: '总规模(万元)',
          key: 'overallScope',
          minWidth: 150
        },
        {
          title: '实缴规模(万元)',
          key: 'realScope',
          minWidth: 150
        },
        {
          title: '在投项目(个)',
          key: 'buyCount',
          width: 120
        },
        {
          title: '在投规模(万元)',
          key: 'buyScope',
          minWidth: 150
        },
        {
          title: '管理人',
          key: 'manager',
          width: 80
        },
        {
          title: '基金状态',
          key: 'status',
          width: 100
        },
        {
          title: '成立日期',
          key: 'startTime',
          width: 120
        },
        {
          title: '操作',
          slot: 'action',
          width: 130,
          fixed: 'right'
        }
      ],
      pageData: ''
    }
  },
  methods: {
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
    },
    _show (item) {
      console.log(item)
      this.$router.push({
        name: 'fundDetail',
        query: {
          id: item.id
        }
      })
    }
  },
  beforeMount () {
    getDepositoryTab().then(res => {
      this.tabs = res.data
    })
  }
}
</script>
