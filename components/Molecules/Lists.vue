<template>
  <ul class="lists">
    <li v-for="item in items" :key="item.id">
      <a :href="item.href">{{ item.label }}</a>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component
export default class LeftMenuSlider extends Vue {
  @Prop({ type: Array, default: () => [] }) items: Array<any>;
}
</script>