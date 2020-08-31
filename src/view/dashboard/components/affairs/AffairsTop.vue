<template>
  <Menu mode='horizontal' @on-select='_select' active-name='1' style='height: 36px; line-height: 36px;'>
    <MenuItem name='1'>
      <Badge :count="1000" overflow-count="99">代办事务</Badge>
    </MenuItem >
    <MenuItem name='2'>
      <Badge :count="15" overflow-count="99" type="normal">已办未完结</Badge>
    </MenuItem >
    <MenuItem name='3'>已完结</MenuItem >
  </Menu>
</template>

<script>
export default {
  name: 'ArrairsTop',
  props: ['custom'],
  methods: {
    _select (name) {
      this.$emit('select', name)
    }
  }
}
</script>
