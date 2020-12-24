<template>
  <div class="top">
    <div class="top__wrap">
      <LeftMenuSlider />
      <TopContent />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import LeftMenuSlider from '@/components/Organisms/LeftMenuSlider.vue';
import TopContent from '@/components/Organisms/TopContent.vue';

@Component({
  layout: 'default',
  components: {
    LeftMenuSlider,
    TopContent
  }
})
export default class Top extends Vue {
  //
}
</script>
