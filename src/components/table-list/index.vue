<template>
  <div
    class='mt10'
    style="position: relative;"
  >
    <Spin
      v-if="showLoading"
      fix
      size="large"
    >
      <Icon type="ios-loading" size=18 class="demo-spin-icon-load"></Icon>
      <div>内容加载中</div>
    </Spin>
    <slot>
    </slot>
    <div
      class='df'
      style='justify-content: center;'
    >
      <Page
        v-if="pageData.totalNum / pageData.pageSize > 1"
        class='mt20'
        :total="pageData.totalNum"
        size="small"
        show-elevator
        show-sizer
        show-total
        :current.sync='pageNum'
        @on-page-size-change='changeSize'
        @on-change='changePage'
      />
    </div>
  </div>
</template>

<script>
import { getPageData } from '_api/mission'

export default {
  name: 'TableList',
  model: {
    prop: 'custom',
    event: 'disabledEvent'
  },
  props: {
    custom: {},
    filterData: {
      type: Object,
      default: () => ({})
    },
    url: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 10
    },
    num: {
      type: Number,
      default: 1
    },
    auto: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showLoading: true,
      pageSize: this.size,
      pageNum: this.num,
      pageData: {},
      initStatus: true
    }
  },
  methods: {
    init (hold = false) {
      this.initStatus = true
      this.changePage(hold ? this.pageNum : 1)
      this.changeSize(10)
      this.getData()
    },
    changePage (num) {
      this.pageNum = num
    },
    changeSize (num) {
      this.pageSize = num
    },
    async getData () {
      this.$emit('disabledEvent', true)
      this.showLoading = true
      this.pageData = {}
      let res = await getPageData(this.url, {
        pageSize: this.pageSize,
        pageNum: this.pageNum,
        ...this.filterData
      })
      this.pageData = res.data || {}
      this.$emit('listData', this.pageData)
      this.showLoading = false
      this.initStatus = false
      this.$emit('disabledEvent', false)
    }
  },
  watch: {
    pageSize () {
      !this.initStatus && this.getData()
    },
    pageNum () {
      !this.initStatus && this.getData()
    }
  }
}
</script>

<style scoped>
  .demo-spin-icon-load{
    animation: ani-demo-spin 1s linear infinite;
  }
  @keyframes ani-demo-spin {
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
  }
</style>
