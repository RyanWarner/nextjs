import Head from 'next/head'
import { useRouter } from 'next/router'
import fetch from 'node-fetch'


const Post = (props) => {
  const router = useRouter()
  const { presentationId } = router.query

  const key = Object.keys(props.books)[0]
  const book = props.books[key]
  const title = book.title

  console.log('title', title)

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta property='og:title' content={title} />
        <meta property='og:image' content={book.cover.medium} />
        <meta name='twitter:site' content='@RyanWarnerCodes' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:image' content={book.cover.medium} />
      </Head>
      <p>Presentation: {presentationId}</p>
      <p>Books SSR: {title}</p>
    </div>
  )
}

Post.getInitialProps = async () => {
  const res = await fetch('https://openlibrary.org/api/books?bibkeys=ISBN:0385472579,LCCN:62019420&format=json&jscmd=data')
  const data = await res.json()
  console.log('data', data)

  return {
    books: data
  };
}

export default Post
