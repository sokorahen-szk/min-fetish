<template>
  <div class="select-box">
    <select :name="name">
      <option
        v-for="(item, index) in items"
        :value="item.value"
        :key="index">{{ item.label }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator';

@Component
export default class ThumbnailController extends Vue {
  @Prop({ type: String }) name: String
  @Prop({ type: Array }) items: Array<any>
}
</script>