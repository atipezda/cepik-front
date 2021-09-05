<template>
  <el-row>
    <el-col :span="12" :offset="6">
      <div class='tile-body'>
        <slot/>
      </div>
    </el-col>
  </el-row>
</template>

<script lang='ts'>
import {
  Component,
  Vue
} from 'nuxt-property-decorator'

@Component
export default class Tile extends Vue {

}
</script>

<style>
.tile-body{
  padding: 5% 10%;
  box-shadow: 0 0 5px black;
}
</style>
