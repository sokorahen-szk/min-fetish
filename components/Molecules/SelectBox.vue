<template>
  <div class="select-box">
    <select :name="name" :style="addStyle">
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
  @Prop({ type: String, default: '100%' }) width: string;
  @Prop({ type: String, default: '30px' }) height: string;

  get addStyle(): String {
    return Vue.prototype.$addStyleParser({
      'width': `${this.width}`,
      'height': `${this.height}`
    });
  }
}
</script>