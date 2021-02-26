<template>
  <div class="thumbnail-card card">
    <div class="thumbnail-card__inner">
      <div class="card-img">
        <a :href="item.url"><img :src="item.imgSrc" :alt="item.alt" /></a>
        <div class="card-img__genre"><div :class="item.genre"></div></div>
      </div>
      <div class="thumbnail-card__title">
        <a :href="item.url">{{ item.alt }}</a>
      </div>
      <div class="thumbnail-card__footer">
        <div class="info">
          {{ changeDateToJapaneseText() }}
          <a href="#">{{ item.author.username }}</a>
          閲覧数：{{ item.views }}
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

@Component
export default class TopContent extends Vue {
  @Prop(Object) item: ThumbnailContent

  private changeDateToJapaneseText() :String {
    return Vue.prototype.$dateParser(this.item.uploadDate, '前');
  }

}
</script>