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
                <div class="target-site">
                  対象サイト選択
                  <ul>
                    <li><SelectSiteLogo tag="search_select_pornhub" label="pornhub" /></li>
                    <li><SelectSiteLogo tag="search_select_xvideos" label="xvideos" /></li>
                    <li><SelectSiteLogo tag="search_select_xhamster" label="xhamster" /></li>
                    <li></li>
                  </ul>
                  <div>
                    <Button
                      label="閉じる"
                      :addClass="['bg-gray']"
                      @click="selectSite"
                    />
                  </div>
                </div>
              </PoPModal>
            </dt>
          </dl>
          <dl>
            <dt>
              <Button
                label="検索"
                :addClass="['bg-orange']"
              />
            </dt>
          </dl>
        </div>
      </div>
    </div>
    <div class="thumbnail-controller-mobile">
      <SearchBox
        :addClass="[]"
        height="45px"
        topMobile
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Ref } from 'nuxt-property-decorator';
import SelectBox from '@/components/Molecules/SelectBox.vue';
import Button from '@/components/Atoms/Button.vue';
import PopModal from '@/components/Organisms/PopModal.vue';
import SelectSiteLogo from '@/components/Molecules/SelectSiteLogo.vue';

@Component({
  components: {
    SelectBox,
    Button,
    PopModal,
    SelectSiteLogo,
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