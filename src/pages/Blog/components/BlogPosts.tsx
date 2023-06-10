import ReactMarkdown from 'react-markdown'
import { IssueType } from '..'
import { BlogPostsContainer } from './BlogPosts.styles'

interface BlogPostProps extends IssueType {
  createdAt?: string
}

export function BlogPosts({ title, createdAt, body }: BlogPostProps) {
  return (
    <BlogPostsContainer>
      <div>
        <h1>{title}</h1>
        <span>{createdAt}</span>
      </div>
      <span>
        <ReactMarkdown>{body}</ReactMarkdown>
      </span>
    </BlogPostsContainer>
  )
}
