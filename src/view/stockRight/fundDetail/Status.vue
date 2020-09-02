<template>
  <div class='br5' :style='style'>{{ text }}</div>
</template>

<script>
import { status } from './config'
export default {
  name: 'Status',
  props: ['type'],
  computed: {
    text () {
      return status[this.type].t
    },
    style () {
      return {
        color: status[this.type].c,
        background: status[this.type].bc,
        padding: '2px 15px'
      }
    }
  }
}
</script>
