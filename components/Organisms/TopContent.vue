<template>
  <div class="top-content">
    <div class="top-content__wrap row">
      <ThumbnailCard :thumbnail="thumbnail" />
      <ThumbnailCard :thumbnail="thumbnail" />
      <ThumbnailCard :thumbnail="thumbnail" />
      <ThumbnailCard :thumbnail="thumbnail" />
      <ThumbnailCard :thumbnail="thumbnail" />
      <ThumbnailCard :thumbnail="thumbnail" />
      <ThumbnailCard :thumbnail="thumbnail" />
      <ThumbnailCard :thumbnail="thumbnail" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import ThumbnailCard from '@/components/Molecules/ThumbnailCard.vue';

interface VideoAssessment {
  id: Number
  good: Number
  bad: Number
}

interface ThumbnailContent {
  id: Number
  imgSrc: String
  alt: String
  url: String
  genre: String
  status: VideoAssessment
}

@Component({
  components: {
    ThumbnailCard
  }
})
export default class TopContent extends Vue {
  private thumbnail: ThumbnailContent = {
    id: 1,
    imgSrc: 'https://natgeo.nikkeibp.co.jp/atcl/photo/16/b/091400038/ph_thumb.jpg',
    url: '#',
    alt: 'test',
    genre: 'pornhub',
    status: {
      id: 1,
      good: 0,
      bad: 0
    }
  };

  mounted() {
    console.log(document.querySelectorAll(".top-content__wrap .card").length)
  }
}
</script>