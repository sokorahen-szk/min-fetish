<template>
  <div class="header">
    <div class="header__title">
      <a href="/">みんなのフェチ動画</a>
    </div>

    <div class="header__content">
      <SearchBox
        @search="keywordSearch"
        width="275px"
        iconEnabled
      />
    </div>

    <div class="header__mobile">
      <HamburgerMenu />
    </div>

  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator'
  import SearchBox from '@/components/Molecules/SearchBox.vue';

  @Component({
    components: {
      SearchBox
    }
  })
  export default class Header extends Vue {
    keywordSearch(keywords: String) {
      console.log(keywords);
    }
  }
</script>