<template>
  <div class='p10'>
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
        <div class='confirm'>认购</div>
      </div>
    </page-tab>
  </div>
</template>

<script>
export default {
  name: 'UserNotify',
  data () {
    return {
      url: '/dashboard/UserNotify',
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

<style>
.confirm {
  background: #0094ff;
  color: #fff;
  padding: 2px 4px;
  border-radius: 4px;
}
</style>
