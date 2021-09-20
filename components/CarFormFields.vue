<template>
  <div>
    <el-form-item label='Voivodeship name' prop='voivodeship'>
      <el-col>
        <el-select v-model='voivodeship' name='voivodeship' :loading='voivodeshipsLoading'>
          <el-option
            v-for='voivodeship in voivodeships'
            :key='voivodeship["klucz-slownika"]'
            :label='voivodeship["wartosc-slownika"]'
            :value='voivodeship["klucz-slownika"]' />
        </el-select>
      </el-col>
    </el-form-item>

    <el-form-item label='Registration date' prop='dateRange'>
      <el-col :md='{span: 20}' :lg='{span: 12}' >
        <el-date-picker
          v-model='dataRange'
          class='car-date-range-picker'
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
import { Notification } from 'element-ui'
import { CarApiParams, FIRST_REGISTER_DATE_TYPE, LAST_REGISTER_DATE_TYPE, VoivodeshipsDictRecord } from '~/types/api'
import { datesInDayRange } from '~/helpers/dateHelper'

@Component
export default class CarFormFields extends Vue {

  get dateFilterTypes(): any[] {
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
    const { dateFrom, dateTo } = this.$store.state.cars
    return [dateFrom, dateTo]
  }

  set dataRange(dataRange: string[]) {
    const startDate = new Date(dataRange[0])
    const endDate = new Date(dataRange[1])
    const isInTwoYearsRange = datesInDayRange(startDate, endDate, 365 * 2)

    if (!isInTwoYearsRange) {
      Notification.error('Registration dates should be in 2 years range')
      return
    }

    this.$store.commit('cars/updateDateRange', dataRange)
  }

  get voivodeship(): string {
    return this.$store.state.cars.voivodeship
  }

  set voivodeship(name: string) {
    this.$store.commit('cars/updateVoivodeship', name)
  }

  get voivodeships(): VoivodeshipsDictRecord {
    return this.$store.state.voivodeships.dict
  }

  get voivodeshipsLoading(): boolean {
    return this.$store.state.voivodeships.loading
  }

  get dateType(): CarApiParams['typ-daty'] {
    return this.$store.state.cars.dateType
  }

  set dateType(type: CarApiParams['typ-daty']) {
    this.$store.commit('cars/updateDateType', type)
  }

  mounted() {
    this.$store.dispatch('voivodeships/INIT')
  }

}
</script>
<style>
.car-date-range-picker {
  width: 100% !important;
}
</style>
