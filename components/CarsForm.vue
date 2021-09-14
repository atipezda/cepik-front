<template>
    <el-form ref='form' :model='formData' :rules='rules'>
      <CarFormFields/>

      <el-form-item>
        <el-button type='primary' @click='validateForm'>Search</el-button>
      </el-form-item>
    </el-form>
</template>

<script lang='ts'>
import { Component, Vue, Ref } from 'nuxt-property-decorator'
import { ElForm } from 'element-ui/types/form'
import { CarApiParams } from '~/types/api'
import { validateDataRange } from '~/helpers/validationHelper'

interface CEPIKFormData {
  voivodeship: CarApiParams['voivodeship']
  dateRange: string[]
  dateType: CarApiParams['dateType']
}


@Component
export default class CarsForm extends Vue {

  @Ref form: ElForm

  get formData(): CEPIKFormData {
    const { voivodeship, dateFrom, dateTo, dateType } = this.$store.state.cars
    const dateRange = [dateFrom, dateTo]

    return {
      voivodeship,
      dateRange,
      dateType
    }
  }

  rules = {
    voivodeship: { required: true, message: 'Please select voivodeship', trigger: 'blur' },
    dateRange: { required: true, validator: validateDataRange, trigger: 'change' },
    dateType: { required: true, message: 'Please select type of registration date', trigger: 'blur' },

  }

  validateForm(): void {
    this.$refs.form.validate()
    this.$store.dispatch('cars/SUBMIT_FORM')
  }

}
</script>
