import { Author, Embedded } from './../@types/BlogPostType'

export const getAuthor = (embedded: Embedded): Author => {
  return {
    name: embedded.author[0]?.name,
    link: embedded.author[0]?.link,
  }
}

const CATEGORY = 0
const POST_TAG = 1
const TOPIC = 2
const GROUP = 3

export const getTerm = (embedded: Embedded, index): undefined | string => {
  return embedded['wp:term'][index][0]?.name
}

interface Data {
  author: Author
  category: string
  firstTag: string
  topic: string
  group: string
}

export const getData = (embedded: Embedded): Data => {
  return {
    author: getAuthor(embedded),
    category: getTerm(embedded, CATEGORY),
    firstTag: getTerm(embedded, POST_TAG),
    topic: getTerm(embedded, TOPIC),
    group: getTerm(embedded, GROUP),
  }
}
