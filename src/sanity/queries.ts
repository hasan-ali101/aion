export const POSTS_QUERY = `*[_type == "post"]|order(publishedAt asc) {
  title,
  description,
  author->{name},
  mainImage {
    asset -> {
      url
    }
  }
}`;
