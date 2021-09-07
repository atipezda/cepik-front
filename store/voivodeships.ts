export interface VoivodeshipsState {
  loading: boolean,
  names: string[]
}


export const stateObject: VoivodeshipsState = {
  loading: true,
  names: []
}

export const state: Function = () => (stateObject)

export const mutations = {
  INIT(state: VoivodeshipsState){
  //  TODO: fetch data or load from cache
    state.loading = false
    state.names = ['slaskie', 'malopolska']
  }
}
