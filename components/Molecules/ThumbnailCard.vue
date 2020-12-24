<template>
  <div class="thumbnail-card card">
    <div class="thumbnail-card__inner">
      <div class="card-img">
        <a :href="thumbnail.url"><img :src="thumbnail.imgSrc" :alt="thumbnail.alt" /></a>
        <div class="card-img__genre"><div :class="thumbnail.genre"></div></div>
      </div>
      <div class="thumbnail-card__title">
        <a href="#">adddd</a>
      </div>
      <div class="thumbnail-card__footer">
        <div class="time">
          今日
        </div>
        <div class="status">
          <a href="#" class="fa-wrap green"><i class="fas fa-thumbs-up"></i><span class="counter">0</span></a>
          <a href="#" class="fa-wrap red"><i class="fas fa-thumbs-down"></i><span class="counter">0</span></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

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

@Component
export default class TopContent extends Vue {
  @Prop(Object) thumbnail: ThumbnailContent
}
</script>