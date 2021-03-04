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
    { id: 1, label: 'フェラチオ', href: '#' },
    { id: 2, label: '中出し', href: '#' },
    { id: 3, label: '騎乗位', href: '#' },
    { id: 4, label: 'NTR', href: '#' },
    { id: 5, label: '窒息プレイ', href: '#' },
    { id: 6, label: '放置プレイ', href: '#' },
    { id: 7, label: 'SM', href: '#' },
    { id: 8, label: 'マッサージ', href: '#' },
  ];

}
</script>