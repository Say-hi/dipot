<template>
  <wrapper
    title='跟投认购'
  >
    <Row>
      <Col :span='12'>
        <UserInfo />
      </Col>
      <Col :span='12'>
        <UserNotify class='border-left' />
      </Col>
    </Row>
  </wrapper>
</template>

<script>
import Wrapper from '../wrapper'
import UserInfo from './UserInfo'
import UserNotify from './UserNotify'

export default {
  name: 'Follow',
  components: {
    Wrapper,
    UserInfo,
    UserNotify
  }
}
</script>

<style lang="less" scoped>
.border-left {
  border-left: 1px solid #eee;
}
</style>
