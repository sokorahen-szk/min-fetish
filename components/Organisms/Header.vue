<template>
  <div class="header">
    <div class="header__title">
      <a href="/">みんなのフェチ動画</a>
    </div>

    <div class="header__content">
      <SearchBox width="275px" />
    </div>

    <div class="header__mobile">
      <HamburgerMenu />
    </div>

  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import SearchBox from '@/components/Molecules/SearchBox.vue';

  @Component({
    components: {
      SearchBox
    }
  })
  export default class Header extends Vue {
    //
  }
</script>