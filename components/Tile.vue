<template>
  <el-row>
    <el-col :xs="{span:20, offset: 2}" :sm="{span:20, offset: 2}" :md='{span:12, offset: 6}'>
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
  border: solid 1px black;
}
</style>
