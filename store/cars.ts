import { Commit } from 'vuex'
import axios from 'axios'
import { LAST_REGISTER_DATE_TYPE, FIRST_REGISTER_DATE_TYPE } from '~/types/api'
import { formatDateISOWTD } from '~/helpers/dateHelper'

interface CarsState {
  voivodeship: string,
  dateFrom: string,
  dateTo: string,
  dateType?: typeof FIRST_REGISTER_DATE_TYPE | typeof LAST_REGISTER_DATE_TYPE
}

export const stateObject: CarsState = {
  voivodeship: '',
  dateFrom: '',
  dateTo: '',
  dateType: FIRST_REGISTER_DATE_TYPE
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
  }

}


export const actions = {
  async SUBMIT_FORM({ commit, state }: { commit: Commit, state: CarsState }) {
    try {

      const dateFrom = new Date(state.dateFrom)
      const dateTo = new Date(state.dateTo)

      const response = await axios.get(  process.env.CAR_API_URL !, {
        params: {
          'wojewodztwo': state.voivodeship,
          'data-od': formatDateISOWTD(dateFrom),
          'data-do': formatDateISOWTD(dateTo),
          'typ-daty': state.dateType
        }
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }
}