interface IPost {
  slug: string
  title: string
  date: string
  coverImage: string
  excerpt: string
  ogImage: {
    url: string
  }
  tags?: string[]
  content: string
}

export default IPost
