<template>
  <div style='display: none' class='dark-theme-provide-holder'></div>
</template>

<script lang='ts'>
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class DarkThemeProvider extends Vue {

  mounted() {
    // import('element-theme-dark')
    $nuxt.$colorMode.preference = 'dark'
  }

  beforeDestroy() {
    $nuxt.$colorMode.preference = 'light'
  }

}
</script>
<style lang='scss'>
$darkMain: #031a40;
$darkSecond: #02254a;
$darkAccent: #489df5;
$darkTextMain: #dedede;
$darkTextSecond: #b0b0b0;


html.dark-mode {
  body {
    background-color: $darkMain;
    color: $darkTextSecond !important;
  }
  .cepik-logo{
    filter: invert(1);
  }

  .el-switch__label {
    color: $darkTextSecond;

    &.is-active {
      color: $darkAccent;
    }
  }

  .el-form-item__label {
    color: $darkTextMain;
  }

  .el-radio__label {
    color: $darkTextSecond;

    &.is-checked {
      color: $darkAccent;
    }
  }

  .el-input__inner {
    background-color: $darkMain;
  }

  .tile-body {
    background-color: $darkSecond;
  }

  .el-input__inner {
    color: $darkTextSecond;
  }

  .el-select-dropdown {
    background-color: $darkSecond;


    .el-select-dropdown__item.hover {
      background-color: $darkSecond !important;
      color: $darkTextMain;
    }

  }
  .el-date-editor{
    input{
      background-color: $darkMain;
      color: $darkTextSecond;
    }
    .el-range-separator{
      color: $darkTextSecond;
    }
  }
  .el-table__cell{
      background-color: $darkSecond ;
      color: $darkTextMain;
  }
  .el-table__row--striped{
    .el-table__cell{
      background-color: $darkMain !important;
    }
  }
  .el-table--enable-row-hover .el-table__body tr:hover>td.el-table__cell{
    background-color: $darkAccent !important;
  }
  .el-picker-panel{
    background-color: $darkMain;
    color: $darkTextSecond;
    .available.in-range div{
      color: $darkTextMain;
      background-color: $darkAccent;
    }
  }
  .el-notification{
    background-color: $darkAccent;
    border: none;
    .el-notification__title{
      color: $darkTextMain;

    }
    .el-notification__content{
      color: $darkTextMain;

    }
  }
  .el-loading-mask{
    background-color: $darkSecond;
  }
  .el-button--warning{
    background-color: $darkMain;
    border-width: 3px;
    color: #E6A23C;
  }
  .el-icon-info{
    color: $darkTextMain;
  }
  .el-table{
    background-color: $darkMain;
    color: $darkTextMain;
    &::before{
      background-color: $darkMain;
    }
  }
}
</style>
