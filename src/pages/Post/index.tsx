import { useParams } from 'react-router-dom'
import { PostHeader } from './components/PostHeader'
import { PostContainer, PostContent } from './styles'
import { api } from '../../fetch/axios'
import { repoCurrent, userCurrent } from '../../owner'
import { useEffect, useState } from 'react'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

interface CurrentPostType {
  html_url: string
  title: string
  created_at: string
  comments: number
  comments_url: string
  body: string
  user: {
    login: string
  }
}

export function Post() {
  const [post, setPost] = useState<CurrentPostType>(Object)
  const { number } = useParams()

  const fetchPost = async () => {
    const response = await api.get(
      `/repos/${userCurrent}/${repoCurrent}/issues/${number}`,
    )

    setPost(response.data)
  }

  useEffect(() => {
    fetchPost()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <PostContainer>
      {post.user && <PostHeader post={post} />}
      <PostContent>
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </PostContent>
    </PostContainer>
  )
}
