<template>
  <div class='index-page'>
    <Tile>
      <img alt='cepik logo' src='/cepik.png' />
    </Tile>

    <Tile>
      <DarkThemeSwitch />
    </Tile>

    <Tile>
      <CarsForm />
    </Tile>
    <DarkThemeProvider v-if='darkMode' />
  </div>
</template>

<script lang='ts'>
import {
  Component,
  Vue
} from 'nuxt-property-decorator'

@Component
export default class Index extends Vue {
  get darkMode(): boolean{
    return this.$store.state.settings.darkMode
  }
}
</script>
<style>
.index-page {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}
</style>
