<template>
  <el-button type='warning' class='clear-cache-button' @click='clearCache'>Clear cache</el-button>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator'
import { Notification } from 'element-ui'

@Component
export default class CacheClearButton extends Vue {

  clearCache(): void {
    this.$store.commit('cars/CLEAR_ALL_RESULTS')
    this.$store.commit('voivodeships/CLEAR_ALL_VOIVODESHIPS')
    this.$store.dispatch('voivodeships/INIT', false)
    Notification.success({ title: 'Cache cleared', message: 'cache memory has been cleared' })
  }

}
</script>

<style scoped>
</style>
