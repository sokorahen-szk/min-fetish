<template>
  <div class="left-menu-slider">
    <div class="left-menu-slider__wrap">
      <div class="left-menu-slider-title">
        ＃タグ
      </div>
      <ul>
        <Lists :items="items" />
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Lists from '@/components/Molecules/Lists.vue';

interface List {
  id: Number
  label: String
  href: String
}

@Component({
  components: {
    Lists
  }
})
export default class LeftMenuSlider extends Vue {
  private items: Array<List> = [
    { id: 1, label: 'テストA', href: '#' },
    { id: 2, label: 'テストB', href: '#' },
    { id: 3, label: 'テストC', href: '#' },
    { id: 4, label: 'テストD', href: '#' },
    { id: 5, label: 'テストE', href: '#' },
    { id: 6, label: 'テストF', href: '#' },
    { id: 7, label: 'テストG', href: '#' },
    { id: 8, label: 'テストI', href: '#' },
  ];
}
</script>