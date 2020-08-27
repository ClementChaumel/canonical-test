export interface Author {
  name: string
  link: string
}
export interface Embedded {
  author: [Author]
  'wp:term': {
    id: number
    link: string
    name: string
    taxonomy: string
  }[][]
}

export interface Post {
  id: number
  link: string
  featured_media: string
  date: string
  title: {
    rendered: string
  }
  _embedded: Embedded
}
