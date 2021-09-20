<template>
  <div class='index-page'>
    <Tile>
      <img alt='cepik logo' class='cepik-logo' src='/cepik.png' />
      <AppSettings/>
    </Tile>

    <Tile>
      <CarsForm />
    </Tile>

    <Tile :full-width='true'>
      <CarResultTable />
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
  get darkMode(): boolean {
    return this.$store.state.settings.darkMode
  }

  mounted(){
    this.$store.commit('cars/INIT')
  }

}
</script>
<style scoped>
.index-page {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}
/deep/.app-settings-container{
  width: 100%;
}
.cepik-logo{
  width: 100%;
}
</style>
