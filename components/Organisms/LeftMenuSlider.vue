<template>
  <div class="left-menu-slider">
    <div class="left-menu-slider__wrap">
      <ul class="lists">
        <li class="lists-title">
          <span class="lists-title-tag">＃タグ</span>
        </li>
        <li v-for="item in items" :key="item.id">
          <a :href="item.href"><div class="tag">{{ item.label }}</div></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

interface List {
  id: Number
  label: String
  href: String
}

@Component
export default class LeftMenuSlider extends Vue {
  private items: Array<List> = [
    { id: 1, label: 'ティオ', href: '#' },
    { id: 2, label: '太し', href: '#' },
    { id: 3, label: '乗食', href: '#' },
    { id: 4, label: 'NTR', href: '#' },
    { id: 5, label: '息プレイ', href: '#' },
    { id: 6, label: 'コスプレ', href: '#' },
    { id: 7, label: '着プレ', href: '#' },
    { id: 8, label: 'テストI', href: '#' },
  ];

}
</script>