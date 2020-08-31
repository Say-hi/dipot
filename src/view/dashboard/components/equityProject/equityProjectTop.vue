<template>
  <div class='df dfac'>
    <div class='flex1 tac'>
      <p >股权项目总数（个）</p>
      <count-to
        class='f30'
        :end='1231231'
        usegroup
      ></count-to>
    </div>
    <div class='flex1'>
      <Pie
        style='height: 200px; width: 200px;'
        :value='department'
        text='投资部门分布(个数)'
      />
    </div>
    <div class='flex1'>
      <Pie
        style='height: 200px; width: 200px;'
        :value='plate'
        text='投资版块分布(个数)'
      />
    </div>
  </div>
</template>

<script>
import CountTo from '@/components/count-to'
import Pie from '@/components/charts/pie.vue'
export default {
  name: 'equityProjectTop',
  components: {
    CountTo,
    Pie
  },
  data () {
    return {
      department: [
        { value: 335, name: '投资一部' },
        { value: 456, name: '投资二部' },
        { value: 4567, name: '投资三部' },
        { value: 123, name: '投资四部' }
      ],
      plate: [
        { value: 1234, name: '消费行业' },
        { value: 2, name: '5G' },
        { value: 423, name: '新能源' },
        { value: 123, name: '光伏能源' }
      ]
    }
  }
}
</script>
