<template>
  <el-row>
    <el-col
      :xs='xs'
      :sm='sm'
      :md='md'>
      <div class='tile-body' :class='{full: fullWidth}'>
        <slot />
      </div>
    </el-col>
  </el-row>
</template>

<script lang='ts'>
import {
  Component,
  Vue,
  Prop
} from 'nuxt-property-decorator'

interface ColSettings {
  span: number,
  offset?: number
}

@Component
export default class Tile extends Vue {
  @Prop({ default: () => false }) fullWidth!: boolean


  get xs(): ColSettings {
    if (this.fullWidth) return {
      span: 20,
      offset: 2
    }
    return {
      span: 20,
      offset: 2
    }
  }

  get sm(): ColSettings {
    if (this.fullWidth) return {
      span: 20,
      offset: 2
    }
    return {
      span: 20,
      offset: 2
    }
  }

  get md(): ColSettings {
    if (this.fullWidth) return {
      span: 22,
      offset: 1
    }
    return {
      span: 16,
      offset: 4
    }
  }


}
</script>

<style>
.tile-body {
  padding: 5% 10%;
  margin: 10px 0;
  border-radius: 5px;
  box-shadow: 0 0 10px rgb(0 0 0 / 0.2);
}
.tile-body.full{
  padding: 2% 5px;
}
</style>
