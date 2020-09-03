<template>
  <div>
    <BasisInfo />
    <DetailInfo class='mt10' />
  </div>
</template>

<script>
import BasisInfo from './fundDetail/BasisInfo'
import DetailInfo from './fundDetail/DetailInfo'
export default {
  name: 'FundDetail',
  components: {
    BasisInfo,
    DetailInfo
  }
}
</script>
