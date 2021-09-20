import { Commit } from 'vuex'
import axios from 'axios'
import {
  LAST_REGISTER_DATE_TYPE,
  FIRST_REGISTER_DATE_TYPE,
  CarRegistrationDataRowAttributes,
  CarApiParams
} from '~/types/api'
import { formatDateISOWTD } from '~/helpers/dateHelper'
import { findCarResultinAllResults } from '~/helpers/cacheHelper'

export interface ResultStored {
  voivodeship: string,
  dateFrom: string,
  dateTo: string,
  dateType?: typeof FIRST_REGISTER_DATE_TYPE | typeof LAST_REGISTER_DATE_TYPE
  result: CarRegistrationDataRowAttributes[]
}

interface CarsState {
  isLoading: boolean
  resultLoadedFromCache: boolean
  voivodeship: string,
  dateFrom: string,
  dateTo: string,
  dateType?: typeof FIRST_REGISTER_DATE_TYPE | typeof LAST_REGISTER_DATE_TYPE
  result: CarRegistrationDataRowAttributes[],
  allResults: ResultStored[]
}

export const stateObject: CarsState = {
  isLoading: false,
  resultLoadedFromCache: false,
  voivodeship: '',
  dateFrom: '',
  dateTo: '',
  dateType: FIRST_REGISTER_DATE_TYPE,
  result: [],
  allResults: [],
}

export const state: Function = () => (stateObject)

export const mutations = {
  updateVoivodeship(state: CarsState, name: CarsState['voivodeship']) {
    state.voivodeship = name
  },
  updateDateRange(state: CarsState, dateRange: string[]) {
    state.dateFrom = dateRange[0]
    state.dateTo = dateRange[1]
  },
  updateDateType(state: CarsState, type: CarsState['dateType']) {
    state.dateType = type
  },
  UPDATE_RESULTS(state: CarsState, {
    params,
    rows
  }: { params: CarApiParams, rows: CarRegistrationDataRowAttributes[] }) {
    state.result = rows
    const resultQuery: ResultStored = {
      voivodeship: params.wojewodztwo,
      dateFrom: params['data-od'],
      dateTo: params['data-do'] || '',
      dateType: params['typ-daty'],
      result: rows
    }
    state.allResults.push(resultQuery)
    state.result = rows
  },
  SET_LOADING_STATE(state: CarsState, isLoading: boolean = true) {
    state.isLoading = isLoading
  },
  SET_LOADED_FROM_CACHE(state: CarsState, wasLoadedFromCache: boolean = true){
    state.resultLoadedFromCache = wasLoadedFromCache
  },
  CLEAR_ALL_RESULTS(state: CarsState){
    state.allResults = []
    state.isLoading = false
  }
}


export const actions = {
  async SUBMIT_FORM({ commit, state }: { commit: Commit, state: CarsState }) {
    try {
      commit('SET_LOADING_STATE')
      const dateFrom = new Date(state.dateFrom)
      const dateTo = new Date(state.dateTo)

      const params: CarApiParams = {
        'wojewodztwo': state.voivodeship,
        'data-od': formatDateISOWTD(dateFrom),
        'data-do': formatDateISOWTD(dateTo),
        'typ-daty': state.dateType
      }

      let rows: CarRegistrationDataRowAttributes[] | false

      rows = findCarResultinAllResults(params, state.allResults)

      if (rows) {
        commit('SET_LOADED_FROM_CACHE')
      }else{
        const response = await axios.get(process.env.CAR_API_URL !, {
          params
        })
        rows = response.data.data.map((result: any) => result.attributes)
        commit('SET_LOADED_FROM_CACHE', false)
      }


      commit('UPDATE_RESULTS', { params, rows })
      commit('SET_LOADING_STATE', false)
    } catch (error) {
      console.log(error)
    }
  }
}
