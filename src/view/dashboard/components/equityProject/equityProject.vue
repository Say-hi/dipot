<template>
  <div>
    <wrapper title='股权项目'>
      <EquityProjectTop class='bd1' />
      <EquityProjectType />
    </wrapper>
  </div>
</template>

<script>
import Wrapper from '../wrapper'
import EquityProjectTop from './equityProjectTop'
import EquityProjectType from './equityProjectType'
export default {
  name: 'EquityProject',
  components: {
    Wrapper,
    EquityProjectTop,
    EquityProjectType
  }
}
</script>
