import { Commit } from 'vuex'
import axios, { AxiosResponse } from 'axios'
import VuexPersistence from 'vuex-persist'
import { VoivodeshipsDictRecord } from '~/types/api'
import { isDateToday } from '~/helpers/dateHelper'

export interface VoivodeshipsState {
  loading: boolean,
  loadDate?: Date,
  dict: VoivodeshipsDictRecord[]
}

export const stateObject: VoivodeshipsState = {
  loading: true,
  loadDate: undefined,
  dict: []
}

export const state: Function = () => (stateObject)

export const mutations = {
  SET_VOIVODESHIPS(state: VoivodeshipsState, voivodeships: VoivodeshipsDictRecord[]) {
    state.loading = false
    state.loadDate = new Date()
    state.dict = voivodeships
  }
}


export const actions = {
  async INIT({ commit, state }: { commit: Commit, state: VoivodeshipsState }) {

    if (state.loadDate && isDateToday(new Date(state.loadDate))) return // loaded from cache and data is actual (today)
    console.log("FETCH VOIVODESHIPS")
    try {
      const res: AxiosResponse = await axios.get(process.env.VOIVODESHIPS_DICT_API_URL !)
      const voivodeships: VoivodeshipsDictRecord[] = res.data.data.attributes['dostepne-rekordy-slownika']
      commit('SET_VOIVODESHIPS', voivodeships)
    } catch (error) {
      console.error(error)
    }
  }
}
