<template>
  <div class='index-page'>
    <Tile>
      <img alt='cepik logo' src='/cepik.png'/>
    </Tile>

    <Tile>
      <CarsForm/>
    </Tile>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue
} from 'nuxt-property-decorator'

@Component
export default class Index extends Vue {
}
</script>
<style>
.index-page{
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
}
</style>
