
interface SettingsState {
  darkMode: boolean,
}

export const stateObject: SettingsState = {
  darkMode: false
}


export const state: Function = () => (stateObject)

export const mutations = {
  SET_DARKMODE(state: SettingsState, isDarkModeOn:boolean) {
    state.darkMode = isDarkModeOn
  },
}
