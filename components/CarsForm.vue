<template>
  <el-form ref='form' :model='formData' :rules='rules'>
    <CarFormFields />

    <el-form-item>
      <el-button type='primary' @click='debounceSubmit'>Search</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang='ts'>
import { Component, Vue, Ref } from 'nuxt-property-decorator'
import { ElForm } from 'element-ui/types/form'
import { debounce } from 'ts-debounce'
import { CarApiParams } from '~/types/api'
import { validateDataRange } from '~/helpers/validationHelper'
import { Notification } from 'element-ui'

interface CEPIKFormData {
  voivodeship: CarApiParams['voivodeship']
  dateRange: string[]
  dateType: CarApiParams['dateType']
}


@Component
export default class CarsForm extends Vue {

  @Ref() form!: ElForm

  debounceSubmit: Function = debounce(this._submitForm, 300)

  get formData(): CEPIKFormData {
    const { voivodeship, dateFrom, dateTo, dateType } = this.$store.state.cars
    const dateRange = [dateFrom, dateTo]

    return {
      voivodeship,
      dateRange,
      dateType
    }
  }

  protected rules = {
    voivodeship: { required: true, message: 'Please select voivodeship', trigger: 'blur' },
    dateRange: { required: true, validator: validateDataRange, trigger: 'change' },
    dateType: { required: true, message: 'Please select type of registration date', trigger: 'blur' }
  }

  private async _submitForm(): void {
    const formModel: any = this.$refs.form
    formModel.validate()
    await this.$store.dispatch('cars/SUBMIT_FORM')
    if(this.$store.state.cars.resultLoadedFromCache){
      Notification.info({
        title: 'Loaded from cache',
        message: 'Use clear cache button to update'
      })
    }
  }

}
</script>
