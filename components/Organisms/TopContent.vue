<template>
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
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import ThumbnailCard from '@/components/Molecules/ThumbnailCard.vue';
import ThumbnailController from '@/components/Organisms/ThumbnailController.vue';

interface VideoAssessment {
  id: Number
  good: Number
  bad: Number
}

interface User {
  id: Number
  username: String
}

interface ThumbnailContent {
  id: Number
  imgSrc: String
  alt: String
  url: String
  author: User
  genre: String
  status: VideoAssessment
  views: Number
  uploadDate: Date
}

@Component({
  components: {
    ThumbnailCard,
    ThumbnailController
  }
})
export default class TopContent extends Vue {
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