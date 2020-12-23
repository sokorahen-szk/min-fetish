<template>
  <div class="left-menu-slider" :class="{ 'hide' : !tagListToggle }">
    <div class="left-menu-slider__wrap" v-if="tagListToggle">
      <ul class="lists">
        <li class="lists-title">
          <span class="lists-title-tag">＃タグ</span>
          <div
            class="lists-title-icon"
            @click="tagToggle"
          >
            <i class="fas fa-angle-left"></i>
          </div>
        </li>
        <li v-for="item in items" :key="item.id">
          <a :href="item.href"><div class="tag">{{ item.label }}</div></a>
        </li>
      </ul>
    </div>
    <div
      class="wrapper"
      @click="tagToggle"
      v-else
    >
      <i class="fas fa-angle-right"></i>
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
    { id: 1, label: 'テストA', href: '#' },
    { id: 2, label: 'テストB', href: '#' },
    { id: 3, label: 'テストC', href: '#' },
    { id: 4, label: 'テストD', href: '#' },
    { id: 5, label: 'テストE', href: '#' },
    { id: 6, label: 'テストF', href: '#' },
    { id: 7, label: 'テストG', href: '#' },
    { id: 8, label: 'テストI', href: '#' },
  ];

  private tagListToggle: Boolean = true;

  tagToggle() {
    this.tagListToggle = !this.tagListToggle;
  }
}
</script>