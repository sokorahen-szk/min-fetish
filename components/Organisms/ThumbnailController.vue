<template>
  <div class="thumbnail-controller">
    <div class="thumbnail-controller__inner">
      <div class="thumbnail-controller__box">
        <div class="thumbnail-controller__box-content">
          <dl>
            <dt>表示順：</dt>
            <dd><SelectBox name="video_times" :items="video_times" /></dd>
          </dl>
          <dl>
            <dt>人気順：</dt>
            <dd><SelectBox name="video_times" :items="favorite_lists" /></dd>
          </dl>
          <dl>
            <dt>
              <Button
                label="対象選択"
                :addClass="['bg-cyan']"
                @click="selectSite"
              />
              <PopModal ref="popModal">
                チェックリスト
              </PoPModal>
            </dt>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Ref } from 'nuxt-property-decorator';
import SelectBox from '@/components/Molecules/SelectBox.vue';
import Button from '@/components/Atoms/Button.vue';
import PopModal from '@/components/Organisms/PopModal.vue';

@Component({
  components: {
    SelectBox,
    Button,
    PopModal
  }
})
export default class ThumbnailController extends Vue {

  @Ref() popModal: PopModal;

  private video_times: Array<any> = [
    { label: "すべて", value: "1" },
    { label: "5分", value: "2" },
    { label: "10分", value: "3" },
    { label: "20分", value: "4" },
  ];
  private favorite_lists: Array<any> = [
    { label: "すべて", value: "1" },
    { label: "とても良い", value: "2" },
    { label: "賛否両論", value: "3" },
    { label: "とても悪い", value: "4" },
  ];

  selectSite(e: Event) :void {
    this.popModal.isOpen = !this.popModal.isOpen;
  }
}
</script>