import { Post } from '../@types/BlogPostType'
interface BlogPosts {
  posts: [Post]
}

export const BlogPosts: React.FC<BlogPosts> = ({ posts }) => {
  return (
    <>
      {posts.map((post) => {
        return <p key={post.id}>{post.title.rendered}</p>
      })}
    </>
  )
}

export default BlogPosts

export async function getStaticProps() {
  const res = await fetch(
    'https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json'
  )
  const posts = await res.json()

  return {
    props: {
      posts,
    },
  }
}
