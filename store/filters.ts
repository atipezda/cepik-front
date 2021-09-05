import { ApiParams, FIRST_REGISTER_DATE_TYPE } from '~/types/api'

export interface FiltersState extends ApiParams {
}


export const stateObject: FiltersState = {
  voivodeship: '',
  dateFrom: '',
  dateTo: '',
  dateType: FIRST_REGISTER_DATE_TYPE
}

export const state: Function = () => (stateObject)

export const mutations = {
  updateVoivodeship(state: FiltersState, name: FiltersState['voivodeship']) {
    state.voivodeship = name
  },
  updateDateRange(state: FiltersState, dateRange: string[]) {
    state.dateFrom = dateRange[0]
    state.dateTo = dateRange[1]
  },
  updateDateType(state: FiltersState, type: FiltersState['dateType']) {
    state.dateType = type
  }

}
