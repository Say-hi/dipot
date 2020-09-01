<template>
  <div class='wrapper m5' v-if='content.length'>
    <div v-for='(item, index) in content' :key='item.title' class='wrapper-item df' :class='{mt10: index > 0}'>
      <Icon :size='28' :type='item.type || "md-menu"' />
      <div class='ml10 flex1'>
        <p class='bd1 p50'>{{ item.title }}</p>
        <!-- <p class='p50'>{{ item.money ? money(item.money) : item.count }}</p> -->
        <CountTo
          class='p50'
          :end='item.money || item.count'
          usegroup
         />
      </div>
    </div>
  </div>
</template>

<script>
import { thousandBitSeparator } from '@/libs/util'
import CountTo from '@/components/count-to'
export default {
  name: 'ReportItem',
  components: {
    CountTo
  },
  props: {
    content: {
      type: Array,
      default: () => ([])
    }
  },
  methods: {
    money (num) {
      return thousandBitSeparator(num)
    }
  }
}
</script>

<style lang='less' scoped>
.wrapper {
  border: 1px solid #eee;
  padding: 5px;
  font-size: 14px;
}
.wrapper-item {
  align-items: center;
}
.bd1 {
  border-bottom: 1px solid #eee;
}
</style>
