export interface VideoAssessment {
    id: Number
    good: Number
    bad: Number
  }

export interface ThumbnailContent {
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