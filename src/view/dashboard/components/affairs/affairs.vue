<template>
  <div>
    <Col :span="span">
      <wrapper title="我的事务">
        <pre>
          this is Affairs
          this is Affairs
          this is Affairs
          this is Affairs
          this is Affairs
        </pre>
      </wrapper>
    </Col>
  </div>
</template>

<script>
export default {
  name: 'Affairs',
  props: {
    span: {
      type: Number | String,
      default: 12
    }
  },
  components: {
    Wrapper: () => import('../wrapper')
  }
}
</script>
