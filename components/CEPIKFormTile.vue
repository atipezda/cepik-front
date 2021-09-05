<template>
  <Tile>
    <el-form>
      <el-form-item label='Registration date'>
        <el-col>
          <el-date-picker
            v-model='dataRange'
            type='daterange'
            range-separator='To'
            start-placeholder='Start date'
            end-placeholder='End date'>
          </el-date-picker>
        </el-col>
      </el-form-item>
    </el-form>
  </Tile>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class CEPIKFormTile extends Vue {

  get dataRange(): string[] {
    const { dateFrom, dateTo } = this.$store.state.filters
    return [dateFrom, dateTo]
  }

  set dataRange(dataRange: string[]): void {
    this.$store.commit('filters/updateDateRange', dataRange)
  }

}
</script>

<style scoped>
</style>
