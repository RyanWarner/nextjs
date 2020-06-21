import { useRouter } from 'next/router'

const Post = () => {
  const router = useRouter()
  const { presentationId } = router.query

  return <p>Presentation: {presentationId}</p>
}

export default Post
