import { Post } from '../@types/BlogPostType'
import { getData } from '../utils/embedded-wp-utils'
import { formatDate } from '../utils/date-utils'

interface Card {
  post: Post
}

export const Card: React.FC<Card> = ({ post }) => {
  const {
    title: { rendered: postTitle },
    featured_media: image,
    link,
    date,
    _embedded: embedded,
  } = post

  const { author, category, firstTag: tag, topic } = getData(embedded)

  return (
    <div>
      <h3>{topic ? topic : tag ? tag : 'Canonical News'}</h3>
      <img src={image} alt={`${postTitle} illustration`}></img>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <p>{postTitle}</p>
      </a>
      <p>
        By{' '}
        <a href={author.link} target="_blank" rel="noopener noreferrer">
          {author.name}
        </a>{' '}
        on {formatDate(date)}
      </p>
      <h4>{category}</h4>
    </div>
  )
}

export default Card
