<template>
    <div class="check-box">
        <input
            type="checkbox"
            :id="name"
            :name="name"
            :value="value_"
            :class="{'large' : large}"
            @change="changeValue"
        /><label :for="name">{{ label }}</label>
    </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'nuxt-property-decorator'

  @Component
  export default class CheckBox extends Vue {
    @Prop(String) name: string;
    @Prop({ type: String, default: '' }) value: string;
    @Prop({ type: String, default: '' }) label: string;
    @Prop({ type: Boolean, default: false }) large: Boolean;

    private value_: String = this.$props.value;

    changeValue() {
      return this.$emit('change', this.value_)
    }

  }
</script>