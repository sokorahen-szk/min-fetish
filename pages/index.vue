<template>
  <div class="top">
    <div class="top__wrap">
      <LeftMenuSlider />
      <div class="top-content">
        <ThumbnailController />
        <div class="top-content__wrap row">
          <template v-for="item in data">
            <ThumbnailCard :item="item" :key="`thumbnail-card-${item.id}`" />
          </template>
          <template v-for="i in loopCount()">
              <ThumbnailCard :key="`thumbnail-card-dummy-${i}`" disabled />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import LeftMenuSlider from '@/components/Organisms/LeftMenuSlider.vue';
import ThumbnailCard from '@/components/Molecules/ThumbnailCard.vue';
import ThumbnailController from '@/components/Organisms/ThumbnailController.vue';
import SearchBox from '@/components/Molecules/SearchBox.vue';

import {ThumbnailContent} from '@/types/video';

@Component({
  layout: 'default',
  components: {
    LeftMenuSlider,
    ThumbnailCard,
    ThumbnailController,
    SearchBox,
  }
})
export default class Top extends Vue {
  private data: Array<ThumbnailContent> = [
    {
      id: 1,
      imgSrc: 'https://natgeo.nikkeibp.co.jp/atcl/photo/16/b/091400038/ph_thumb.jpg',
      url: '#',
      author: {
        id: 1,
        username: 'ysuzuki'
      },
      alt: 'リスのたわむれ',
      genre: 'pornhub',
      status: {
        id: 1,
        good: 24,
        bad: 2
      },
      views: 3250,
      uploadDate: new Date('2020-02-21')
    },
    {
      id: 2,
      imgSrc: 'https://natgeo.nikkeibp.co.jp/atcl/photo/16/b/091400038/ph_thumb.jpg',
      url: '#',
      author: {
        id: 1,
        username: 'ysuzuki'
      },
      alt: 'リスのたわむれ',
      genre: 'pornhub',
      status: {
        id: 1,
        good: 0,
        bad: 0
      },
      views: 3250,
      uploadDate: new Date('2020-02-21')
    },
    {
      id: 3,
      imgSrc: 'https://natgeo.nikkeibp.co.jp/atcl/photo/16/b/091400038/ph_thumb.jpg',
      url: '#',
      author: {
        id: 1,
        username: 'ysuzuki'
      },
      alt: 'リスのたわむれ',
      genre: 'pornhub',
      status: {
        id: 1,
        good: 0,
        bad: 0
      },
      views: 3250,
      uploadDate: new Date('2020-02-21')
    },
    {
      id: 4,
      imgSrc: 'https://natgeo.nikkeibp.co.jp/atcl/photo/16/b/091400038/ph_thumb.jpg',
      url: '#',
      author: {
        id: 1,
        username: 'ysuzuki'
      },
      alt: 'リスのたわむれ',
      genre: 'pornhub',
      status: {
        id: 1,
        good: 0,
        bad: 0
      },
      views: 3250,
      uploadDate: new Date('2020-02-21')
    },
    {
      id: 5,
      imgSrc: 'https://natgeo.nikkeibp.co.jp/atcl/photo/16/b/091400038/ph_thumb.jpg',
      url: '#',
      author: {
        id: 1,
        username: 'ysuzuki'
      },
      alt: 'リスのたわむれ',
      genre: 'pornhub',
      status: {
        id: 1,
        good: 0,
        bad: 0
      },
      views: 3250,
      uploadDate: new Date('2020-02-21')
    },
  ];

  private loopCount(): number {
    let counter = 0;
    while ( (this.data.length + counter) % 3 !== 0) {
      counter++;
    }
    return counter;
  }
}
</script>
