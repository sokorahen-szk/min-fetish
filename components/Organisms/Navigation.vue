<template>
  <div class="navigation navigation-sp">
    <ul class="navigation__wrap">
      <template v-for="(genre, index) in navigationGenres">
      <li :key="index">
        <a :href="genre.href">{{ genre.label }}</a>
      </li>
      </template>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

interface NavigationGenres {
  label: String
  href: String
}

export default class Navigation extends Vue {
  @Prop({type: String}) test: string;

  private navigationGenres: Array<NavigationGenres> = [
    { label: 'ジャンルA', href: '#' },
    { label: 'ジャンルB', href: '#' },
    { label: 'ジャンルC', href: '#' },
    { label: 'ジャンルD', href: '#' },
    { label: 'ジャンルE', href: '#' }
  ];
}
</script>