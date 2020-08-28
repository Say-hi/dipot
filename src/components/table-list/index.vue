<template>
  <div class='mt20'>
    <slot>
      <Table border :columns="columns" :data="data">
      </Table>
    </slot>
    <div class='df' style='justify-content: center;'>
      <Page class='mt20' :total="40" size="small" show-elevator show-sizer show-total />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    filterData: {
      type: Object,
      default: () => ({})
    },
    url: {
      type: String,
      default: ''
    },
    pageSize: {
      type: Number,
      default: 10
    },
    pageNum: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      columns: [
        {
          type: 'index',
          width: 70,
          title: '序号',
          align: 'center'
        },
        {
          title: '任务类型',
          key: 'name'
        },
        {
          title: '流程标题',
          key: 'age'
        },
        {
          title: '流程类型',
          key: 'address'
        },
        {
          title: '办理节点',
          key: 'address'
        },
        {
          title: '发起人',
          key: 'address'
        },
        {
          title: '接收时间',
          key: 'address'
        },
        {
          title: '完成时间',
          key: 'address'
        },
        {
          title: '当前流程办理人',
          key: 'address'
        },
        {
          title: '流程状态',
          key: 'address'
        }
      ],
      data: [
        {
          name: 'John Brown',
          age: 18,
          address: 'New York No. 1 Lake Park',
          date: '2016-10-03'
        },
        {
          name: 'Jim Green',
          age: 24,
          address: 'London No. 1 Lake Park',
          date: '2016-10-01'
        },
        {
          name: 'Joe Black',
          age: 30,
          address: 'Sydney No. 1 Lake Park',
          date: '2016-10-02'
        },
        {
          name: 'Jon Snow',
          age: 26,
          address: 'Ottawa No. 2 Lake Park',
          date: '2016-10-04'
        }
      ],
      pageData: []
    }
  },
  computed: {
    tabFilter () {
      return Object.assign({}, {pageSize, pageNum}, this.filterData)
    }
  },
  methods: {
    init () {
      this.pageNum = 0
      this.changePage()
      this.pageData = []
    },
    changePage (num) {
      this.pageNum = num ? num : ++this.pageNum 
    },
    async getData () {
      let res = await this.$axios.post(url, tabFilter)
      this.$emit('listData', res)
    }
  },
  created () {
    this.init()
    // todo获取数据并emit出去
  }
}
</script>
