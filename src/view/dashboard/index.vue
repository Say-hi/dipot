<template>
  <div>
    <TopTime />
    <Row :gutter="16" class="mt20">
      <Report :span="12" />
      <Affairs :span="12" />
    </Row>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  components: {
    TopTime: () => import('./components/top-time'),
    Report: () => import('./components/report/report'),
    Affairs: () => import('./components/affairs/affairs')
  }
}
</script>
