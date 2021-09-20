<template>
  <div class='app-settings-container'>
    <h3>App settings</h3>
    <DarkThemeSwitch/>
    <CacheClearButton/>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class AppSettings extends Vue {

}
</script>

<style scoped>
.app-settings-container{
  display: flex;
  flex-direction: row;
  align-content: center;
  flex-wrap: wrap;
}
.app-settings-container h3{
  flex-basis: 100%;
}
.app-settings-container /deep/.clear-cache-button{
  justify-self: flex-end;
  margin-left: auto;
  margin-top: 5px;
}
</style>
