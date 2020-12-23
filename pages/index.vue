<template>
  <div class="top">
    <div class="top__wrap">
      <LeftMenuSlider />
      <div>
        a
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import LeftMenuSlider from '@/components/Organisms/LeftMenuSlider.vue';

@Component({
  layout: 'default',
  components: {
    LeftMenuSlider
  }
})
export default class Top extends Vue {
  //
}
</script>
