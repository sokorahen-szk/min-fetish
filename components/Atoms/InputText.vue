<template>
  <input
    type="text"
    :name="name"
    :placeholder="placeHolder"
    class="input-text"
    :class="addClass"
    :style="addStyle"
    :value="value"
    @input="inputEvent"
  />
</template>

<script lang="ts">
  import { Component, Vue, Prop, Watch } from 'vue-property-decorator'

  @Component
  export default class InputBox extends Vue {
    @Prop({ type: String, default: '' }) placeHolder: string;
    @Prop({ type: String, default: 'name' }) name: string;
    @Prop({ type: Array, default: () => [] }) addClass: Array<String>;
    @Prop({ type: String, default: () => [] }) width: string;
    @Prop({ type: String }) value: string;

    get addStyle(): String {
      return Vue.prototype.$addStyleParser({
        'width': `${this.width}`
      });
    }

    inputEvent(e: InputEvent) {
      return this.$emit('input', e.data);
    }
  }
</script>