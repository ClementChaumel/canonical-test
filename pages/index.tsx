import Head from 'next/head'
import { Post } from '../@types/BlogPostType'
import { Card } from '../components/Card'
interface BlogPosts {
  posts: [Post]
  error: boolean
}

export const BlogPosts: React.FC<BlogPosts> = ({ posts, error }) => {
  return (
    <>
      <Head>
        <title>Canonical test</title>
        <meta name="description" content="Technical test for canonical"></meta>
      </Head>
      <div className="row container">
        {error ? (
          <div className="p-notification--negative">
            <p className="p-notification__response">
              <span className="p-notification__status">Error:</span>
              Couldn&lsquo;t fetch posts.
            </p>
          </div>
        ) : (
          posts.map((post) => {
            return <Card key={post.id} post={post} />
          })
        )}
      </div>
    </>
  )
}

export default BlogPosts

export async function getStaticProps() {
  try {
    const res = await fetch(
      'https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json'
    )
    const posts = res.ok ? await res.json() : []

    return {
      props: {
        posts,
        error: !res.ok,
      },
    }
  } catch {
    return {
      props: {
        posts: [],
        error: true,
      },
    }
  }
}
