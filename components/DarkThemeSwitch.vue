<template>
  <el-switch
    v-model="darkMode"
    inactive-text="Light mode"
    active-text="Dark mode">
  </el-switch>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'

@Component
export default class DarkThemeSwitch extends Vue {

    get darkMode(): boolean{
      return this.$store.state.settings.darkMode
    }

    set darkMode(isDarkModeOn: boolean){
      this.$store.commit('settings/SET_DARKMODE', isDarkModeOn)
    }

}
</script>

<style scoped>
</style>
