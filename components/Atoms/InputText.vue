<template>
  <input
    type="text"
    :name="name"
    :placeholder="placeHolder"
    class="input-text"
    :class="addClass"
    :style="addStyle"
  />
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator'

  @Component
  export default class InputBox extends Vue {
    @Prop({ type: String, default: '' }) placeHolder: string;
    @Prop({ type: String, default: 'name' }) name: string;
    @Prop({ type: Array, default: () => [] }) addClass: Array<String>;
    @Prop({ type: String, default: () => [] }) width: string;

    get addStyle(): String {
      return Vue.prototype.$addStyleParser({
        'width': `${this.width}`
      });
    }
  }
</script>