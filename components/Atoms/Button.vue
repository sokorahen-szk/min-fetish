<template>
  <button
    class="button"
    :style="addStyle"
    :class="addClass"
  >
  {{ label }}
  </button>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator'

  @Component
  export default class Button extends Vue {
    @Prop({ type: String, default: 'クリック' }) label: string;
    @Prop({ type: String, default: '100%' }) width: string;
    @Prop({ type: String, default: '30px' }) height: string;
    @Prop({ type: Array, default: () => [] }) addClass: Array<String>;

    get addStyle(): String {
      return Vue.prototype.$addStyleParser({
        'width': `${this.width}`,
        'height': `${this.height}`
      });
    }
  }
</script>