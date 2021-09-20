<template>
  <div class='result-table-container'>

    <el-table
      v-loading='isLoading'
      :data='rows'
      height='100%'
      width='100%'
      stripe
      class='car-result-table'
    >
      <el-table-column
        v-for='name in columns'
        :key='name'
        :prop='name'
        :label='name'
        width='250'
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator'
import { CarRegistrationDataRowAttributes } from '~/types/api'
import { getUniqueArrayObjectKeys } from '~/helpers/arrayHelper'

@Component
export default class CarResultTable extends Vue {

  get isLoading(): boolean {
    return this.$store.state.cars.isLoading
  }

  get rows(): CarRegistrationDataRowAttributes[] {
    return this.$store.state.cars.result
  }

  get columns(): string[] {
    return getUniqueArrayObjectKeys(this.rows)
  }

}
</script>

<style>
.result-table-container {
  width: 100%;
  height: 45vh;
  overflow-x: scroll;
}

.car-result-table {
  width: 100%;
}

.el-table thead th div {
  word-break: break-word !important;
}
</style>
