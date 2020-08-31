<template>
  <div>
    <wrapper title='公司新闻'>
      <page-tab
        :size='5'
        :url='url'
        @listData='_listData'
        pageControl='simple'
        ref='pageTab'
      >
        <div v-if='!list' style='height: 80px;'></div>
        <div
          v-for='item of list'
          :key='item.id'
          class='df dfac f12 p50'
        >
          <div class='flex1'>{{ item.title }}</div>
          <div class='m010'>{{ item.time }}</div>
        </div>
      </page-tab>
    </wrapper>
  </div>
</template>

<script>
import Wrapper from '../wrapper'
export default {
  name: 'CompanyNews',
  components: {
    Wrapper
  },
  data () {
    return {
      url: '/dashboard/NoticeAndAnnouncement',
      list: ''
    }
  },
  methods: {
    _listData (data) {
      this.list = data.lists
    }
  },
  mounted () {
    this.$refs.pageTab.init()
  }
}
</script>
