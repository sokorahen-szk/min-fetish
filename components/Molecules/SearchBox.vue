<template>
  <div class="search-box">
      <InputText
        name="search"
        placeholder="検索"
        :addClass="['bg-dark', 'round']"
        :width="width"
        v-model="keywords"
        @input="inputValue"
      /><Button label="検索" width="auto" :addClass="['bg-orange']" @click="search" v-if="!iconEnabled" />
      <span class="search-btn" @click="search" v-if="iconEnabled">
        <i class="fas fa-search"></i>
      </span>

  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'nuxt-property-decorator'
  import InputText from '@/components/Atoms/InputText.vue';
  import Button from '@/components/Atoms/Button.vue';

  @Component({
    components: {
      InputText,
      Button
    }
  })
  export default class Header extends Vue {
    @Prop({ type: String, default: '100%' }) width: string;
    @Prop({ type: Boolean, default: false }) iconEnabled: boolean;

    private keywords: String = '';

    search() {
      return this.$emit('search', this.keywords)
    }

    inputValue(val: String) {
      this.keywords = val;
    }

  }
</script>