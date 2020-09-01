<template>
  <div>
    <div class='df dfac m010'>
      <Avatar :src='userInfo.avatar' />
      <span class='m010 flex1'>{{ userInfo.name }}</span>
      <Icon
        class='eyes'
        @click="show = !show"
        size='28'
        :type="show ? 'ios-eye' : 'ios-eye-off'" />
    </div>
    <div class='df user-money f12 m010'>
      <div class='flex1 dfc mt10'>
        <span>累计认购申请金额（元）</span>
        <CountTo
          class='f18'
          v-show='show'
          :end='userInfo.offerToBuy || 0 '
          :decimals='2'
          usegroup
         />
        <span v-show='!show' class='f18'>*****</span>
      </div>
      <div class='flex1 dfc mt10'>
        <span>累计跟投金额（元）</span>
        <CountTo
          class='f18'
          v-show='show'
          :end='userInfo.carry || 0 '
          :decimals='2'
          usegroup
         />
        <span v-show='!show' class='f18'>*****</span>
      </div>
      <div class='flex1 dfc mt10'>
        <span>累计股权转让金额（元）</span>
        <CountTo
          class='f18'
          v-show='show'
          :end='userInfo.stockRight || 0 '
          :decimals='2'
          usegroup
         />
        <span v-show='!show' class='f18'>*****</span>
      </div>
      <div class='flex1 dfc mt10'>
        <span>累计收益分配金额（元）</span>
        <CountTo
          class='f18'
          v-show='show'
          :end='userInfo.profit || 0 '
          :decimals='2'
          usegroup
         />
        <span v-show='!show' class='f18'>*****</span>
      </div>
    </div>
  </div>
</template>

<script>
import CountTo from '@/components/count-to'
import { thousandBitSeparator } from '@/libs/util'
import { getUserData } from '@/api/dashboard'
export default {
  name: 'UserInfo',
  components: {
    CountTo
  },
  data () {
    return {
      show: true,
      userInfo: {
        avatar: this.$store.state.user.avatarImgPath,
        name: this.$store.state.user.userName
      }
    }
  },
  methods: {
    _fixMoney (money = 0) {
      return thousandBitSeparator(money)
    }
  },
  async beforeMount () {
    let res = await getUserData()
    this.userInfo = Object.assign({}, this.userInfo, res.data)
  }
}
</script>

<style>
.eyes {
  cursor: pointer;
}
.user-money {
  flex-wrap: wrap;
  white-space: nowrap;
}
.flex1 {
  flex: 50%;
}
</style>
