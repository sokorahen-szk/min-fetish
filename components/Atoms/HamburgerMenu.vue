<template>
  <div
    class="hamburger"
    :class="{active: toggle}"
    @click="clickToggleEvent"
  >
    <div class="hamburger-line top"></div>
    <div class="hamburger-line middle"></div>
    <div class="hamburger-line bottom"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component
export default class HamburgerMenu extends Vue {
  private toggle: Boolean = false;

  clickToggleEvent() {
    this.toggle = !this.toggle;
    return this.$emit('click', this.toggle);
  }

}
</script>