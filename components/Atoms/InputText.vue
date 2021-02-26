<template>
  <input
    type="text"
    :name="name"
    :placeholder="placeholder"
    class="input-text"
    :class="addClass"
    :style="addStyle"
    v-model="value_"
    @input="inputValue"
  />
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'nuxt-property-decorator'

  @Component
  export default class InputBox extends Vue {
    @Prop({ type: String, default: '' }) placeholder: String;
    @Prop({ type: String, default: 'name' }) name: String;
    @Prop({ type: Array, default: () => [] }) addClass: Array<String>;
    @Prop({ type: String, default: '100%' }) width: String;
    @Prop({ type: String, default: '30px' }) height: String;
    @Prop({ type: String }) value: String;

    get addStyle(): String {
      return Vue.prototype.$addStyleParser({
        'width': `${this.width}`,
        'height': `${this.height}`,
      });
    }

    private value_: String = this.$props.value;

    inputValue() {
      return this.$emit('input', this.value_)
    }

  }
</script>