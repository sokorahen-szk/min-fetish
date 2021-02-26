<template>
  <div>
    <div class="pop-modal" :class="{active: isOpen}">
      <div class="pop-modal__inner">
        <div class="inner__wrap">
          <div class="inner__header">
            <i
              class="fas fa-times close-btn"
              @click="close()"
            ></i>
          </div>
          <div class="inner_content">
            <slot></slot>
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

    public isOpen: Boolean = false;

    private close() :void {
      this.isOpen = false;
    }

  }
</script>