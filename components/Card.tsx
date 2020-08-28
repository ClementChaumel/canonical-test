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
    <div className="col-4 custom-card">
      <h4 className="p-muted-heading">
        {topic ? topic : tag ? tag : 'Canonical News'}
      </h4>
      <hr className="dotted-hr"></hr>
      <img
        className="illustration"
        src={image}
        alt={`${postTitle} illustration`}
      ></img>
      <a
        className="fill-space-v"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h3>{postTitle}</h3>
      </a>
      <p className="p-heading--6">
        By{' '}
        <a href={author.link} target="_blank" rel="noopener noreferrer">
          {author.name}
        </a>{' '}
        on {formatDate(date)}
      </p>
      <hr className="dotted-hr"></hr>
      <p className="u-no-margin--bottom">{category}</p>
    </div>
  )
}

export default Card
