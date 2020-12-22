<template>
  <div class="search-box">
      <InputText
        name="search"
        placeholder="検索"
        :addClass="['bg-dark']"
        :width="width"
      />
      <span class="search-btn"><i class="fas fa-search"></i></span>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator'
  import InputText from '@/components/Atoms/InputText.vue';

  @Component({
    components: {
      InputText
    }
  })
  export default class Header extends Vue {
    @Prop({ type: String, default: '100%' })
    width: string;
  }
</script>