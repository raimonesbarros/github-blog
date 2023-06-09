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

export function PostHeader() {
  return (
    <PostHeaderContainer>
      <PostHeaderLinks>
        <Link to="/">
          <img src={back} alt="link" />
          <span>Voltar</span>
        </Link>
        <a href="#">
          <span>Ver no github</span>
          <img src={link} alt="github" />
        </a>
      </PostHeaderLinks>
      <h1>JavaScript data types and data structures</h1>
      <PostHeaderInfo>
        <p>
          <img src={github} alt="" />
          <span>cameronwll</span>
        </p>
        <p>
          <img src={date} alt="" />
          <span>Há 1 dia</span>
        </p>
        <p>
          <img src={comment} alt="" />
          <span>5 comentários</span>
        </p>
      </PostHeaderInfo>
    </PostHeaderContainer>
  )
}
