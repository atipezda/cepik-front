<template>
  <div>
    <el-form-item label='Voivodeship name' prop='voivodeship'>
      <el-col>
        <el-select v-model='voivodeship' name='voivodeship' :loading='voivodeshipsLoading'>
          <el-option
            v-for='voivodeship in voivodeships'
            :key='voivodeship'
            :label='voivodeship'
            :value='voivodeship' />
        </el-select>
      </el-col>
    </el-form-item>

    <el-form-item label='Registration date' prop='dateRange'>
      <el-col>
        <el-date-picker
          v-model='dataRange'
          type='daterange'
          name='dateRange'
          range-separator='To'
          :clearable='false'
          start-placeholder='Start date'
          end-placeholder='End date'>
        </el-date-picker>
      </el-col>
    </el-form-item>

    <el-form-item label='search by' prop='dateType'>
      <el-radio-group v-model='dateType'>
        <el-radio
          v-for='dateType in dateFilterTypes'
          :key='dateType.value'
          name='dateRange'
          :label='dateType.value'>
          {{ dateType.name }}
        </el-radio>
      </el-radio-group>
    </el-form-item>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator'
import { ApiParams, FIRST_REGISTER_DATE_TYPE, LAST_REGISTER_DATE_TYPE } from '~/types/api'

@Component
export default class CEPIKFormFields extends Vue {

  get dateFilterTypes(): string[] {
    return [{
      name: 'first registration date',
      value: FIRST_REGISTER_DATE_TYPE
    },
      {
        name: 'last registration date',
        value: LAST_REGISTER_DATE_TYPE
      }
    ]
  }

  get dataRange(): string[] {
    const { dateFrom, dateTo } = this.$store.state.filters
    return [dateFrom, dateTo]
  }

  set dataRange(dataRange: string[]): void {
    this.$store.commit('filters/updateDateRange', dataRange)
  }

  get voivodeship(): string {
    return this.$store.state.filters.voivodeship
  }

  set voivodeship(name: string): void {
    this.$store.commit('filters/updateVoivodeship', name)
  }

  get voivodeships(): string {
    return this.$store.state.voivodeships.names
  }

  get voivodeshipsLoading(): boolean {
    return this.$store.state.voivodeships.loading
  }

  get dateType(): ApiParams['dateType'] {
    return this.$store.state.filters.dateType
  }

  set dateType(type: ApiParams['dateType']): void {
    this.$store.commit('filters/updateDateType', type)
  }

  mounted() {
    this.$store.commit('voivodeships/INIT')
  }

}
</script>
