import ReactMarkdown from 'react-markdown'
import { IssueType } from '..'
import { BlogPostsContainer } from './BlogPosts.styles'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface BlogPostProps extends IssueType {
  createdAt?: string
}

export function BlogPosts({ title, createdAt, body }: BlogPostProps) {
  return (
    <BlogPostsContainer>
      <div>
        <h1>{title}</h1>
        <span>
          {formatDistanceToNow(new Date(createdAt!), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
      </div>
      <span>
        <ReactMarkdown>{body}</ReactMarkdown>
      </span>
    </BlogPostsContainer>
  )
}
