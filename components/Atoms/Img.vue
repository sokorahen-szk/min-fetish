<template>
    <div class="img">
        <img
          :src="src"
          :alt="alt"
          :style="addStyle"
        />
    </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'nuxt-property-decorator'

  @Component
  export default class Img extends Vue {
    @Prop(String) src: string;
    @Prop({ type: String, default: '' }) alt: string;
    @Prop({ type: String, default: 'auto' }) width: string;
    @Prop({ type: String, default: 'auto' }) height: string;

    get addStyle(): String {
      return Vue.prototype.$addStyleParser({
        'width': `${this.width}`,
        'height': `${this.height}`
      });
    }

  }
</script>