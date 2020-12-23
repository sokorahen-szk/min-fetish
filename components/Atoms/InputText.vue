<template>
  <input
    type="text"
    :name="name"
    :placeholder="placeHolder"
    class="input-text"
    :class="addClass"
    :style="addStyle"
    v-model="value_"
    @input="inputValue"
  />
</template>

<script lang="ts">
  import { Component, Vue, Prop, Watch } from 'nuxt-property-decorator'

  @Component
  export default class InputBox extends Vue {
    @Prop({ type: String, default: '' }) placeHolder: String;
    @Prop({ type: String, default: 'name' }) name: String;
    @Prop({ type: Array, default: () => [] }) addClass: Array<String>;
    @Prop({ type: String, default: () => [] }) width: String;
    @Prop({ type: String }) value: String;

    get addStyle(): String {
      return Vue.prototype.$addStyleParser({
        'width': `${this.width}`
      });
    }

    private value_: String = this.$props.value;

    inputValue() {
      return this.$emit('input', this.value_)
    }

  }
</script>