<template>
  <div>
    <wrapper title='我的事务'>
      <template #top>
        <Button class='mr10'>新建流程</Button>
      </template>
      <ArrairsTop @select='_select' />
      <page-tab
        :url='url'
        :size='5'
        :filter-data='filterData'
        @listData='_listData'
        pageControl='simple'
        ref='pageTab'
      >
        <div v-if='!pageData' style='height: 80px;'></div>
        <Table
          v-if='pageData.lists'
          :columns='columns'
          :data='pageData.lists'
          no-data-text='暂无相关数据'
          size='small'
        ></Table>
      </page-tab>
    </wrapper>
  </div>
</template>

<script>
import Wrapper from '../wrapper'
import ArrairsTop from './ArrairsTop'

export default {
  name: 'Affairs',
  props: {
    span: {
      type: Number | String,
      default: 12
    }
  },
  components: {
    Wrapper,
    ArrairsTop
  },
  data () {
    return {
      url: '/dashboard/affairs',
      filterData: {
        tabActive: '1'
      },
      columns: [
        {
          title: '任务类型',
          key: 'type',
          width: 90
        },
        {
          title: '流程标题',
          key: 'title',
          width: 170
        },
        {
          title: '当前节点',
          key: 'point',
          width: 90
        },
        {
          title: '发起人',
          key: 'people',
        },
        {
          title: '经办人',
          key: 'resolvePeople'
        },
        {
          title: '接收时间',
          key: 'time'
        }
      ],
      pageData: ''
    }
  },
  methods: {
    _select (name) {
      this.filterData.tabActive = name
      this.$nextTick(() => {
        this.$refs.pageTab.init()
      })
    },
    _listData (data) {
      this.pageData = data
    }
  },
  mounted () {
    this.$refs.pageTab.init()
  }
}
</script>
