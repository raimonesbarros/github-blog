import { Link } from 'react-router-dom'
import back from '../../../assets/icons/back.svg'
import link from '../../../assets/icons/link.svg'
import github from '../../../assets/icons/githug.svg'
import date from '../../../assets/icons/date.svg'
import comment from '../../../assets/icons/comment.svg'
import {
  PostHeaderContainer,
  PostHeaderInfo,
  PostHeaderLinks,
} from './PostHeader.styles'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface PostHeaderProps {
  post: {
    html_url: string
    title: string
    created_at: string
    comments: number
    user: {
      login: string
    }
  }
}

export function PostHeader({ post }: PostHeaderProps) {
  return (
    <PostHeaderContainer>
      <PostHeaderLinks>
        <Link to="/">
          <img src={back} alt="link" />
          <span>Voltar</span>
        </Link>
        <a href={post.html_url}>
          <span>Ver no github</span>
          <img src={link} alt="github" />
        </a>
      </PostHeaderLinks>
      <h1>{post.title}</h1>
      <PostHeaderInfo>
        <p>
          <img src={github} alt="" />
          <span>{post.user.login}</span>
        </p>
        <p>
          <img src={date} alt="" />
          <span>
            {formatDistanceToNow(new Date(post.created_at), {
              addSuffix: true,
              locale: ptBR,
            })}
          </span>
        </p>
        <p>
          <img src={comment} alt="" />
          <span>{post.comments + ' comentários'}</span>
        </p>
      </PostHeaderInfo>
    </PostHeaderContainer>
  )
}
