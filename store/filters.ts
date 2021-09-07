import { ApiParams, FIRST_REGISTER_DATE_TYPE } from '~/types/api'


export const stateObject: ApiParams = {
  voivodeship: '',
  dateFrom: '',
  dateTo: '',
  dateType: FIRST_REGISTER_DATE_TYPE
}

export const state: Function = () => (stateObject)

export const mutations = {
  updateVoivodeship(state: ApiParams, name: ApiParams['voivodeship']) {
    state.voivodeship = name
  },
  updateDateRange(state: ApiParams, dateRange: string[]) {
    state.dateFrom = dateRange[0]
    state.dateTo = dateRange[1]
  },
  updateDateType(state: ApiParams, type: ApiParams['dateType']) {
    state.dateType = type
  },

}
