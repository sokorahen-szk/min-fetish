<template>
  <div class="thumbnail-controller">
    <div class="thumbnail-controller__inner">
      <SelectBox name="video_times" :items="video_times" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import SelectBox from '@/components/Molecules/SelectBox.vue';

@Component({
  components: {
    SelectBox
  }
})
export default class ThumbnailController extends Vue {
  private video_times: Array<any> = [
    { label: "すべて", value: "1" },
    { label: "5分", value: "2" },
    { label: "10分", value: "3" },
    { label: "20分", value: "4" },
  ];
}
</script>