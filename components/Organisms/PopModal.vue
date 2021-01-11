<template>
  <div>
    <div class="pop-modal" :class="{active: isOpen}">
      <div class="pop-modal__inner">
        <div class="inner__wrap">
          <div class="inner__header">
            <i
              class="fas fa-times close-btn"
              @click="close"
            ></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'nuxt-property-decorator'

  @Component
  export default class PopModal extends Vue {

    private isOpen: Boolean = true;

    private close() :void {
      this.isOpen = false;
    }

  }
</script>