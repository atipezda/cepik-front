<template />

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class DarkThemeProvider extends Vue {

  mounted() {
    import('element-theme-dark')
  }

  beforeDestroy() {
    location.reload();
  }

}
</script>
