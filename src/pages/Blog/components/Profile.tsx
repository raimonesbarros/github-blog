import {
  ProfileContainer,
  ProfileContent,
  ProfileInfo,
  ProfileName,
} from './Profile.style'
import github from '../../../assets/icons/githug.svg'
import company from '../../../assets/icons/company.svg'
import followers from '../../../assets/icons/followers.svg'
import link from '../../../assets/icons/link.svg'
import { UserType } from '..'

interface ProfileProps {
  user: UserType
}

export function Profile({ user }: ProfileProps) {
  return (
    <ProfileContainer>
      <img src={user.avatar_url} alt="" />
      <ProfileContent>
        <ProfileName>
          <h2>{user.name}</h2>
          <a href={user.html_url}>
            GITHUB
            <img src={link} alt="" />
          </a>
        </ProfileName>
        <p>{user.bio ? user.bio : '💬 Ainda não possui uma bio no github'}</p>
        <ProfileInfo>
          <span>
            <img src={github} alt="" />
            {user.login}
          </span>
          <span>
            <img src={company} alt="" />
            {user.company ? user.company : 'Unknown'}
          </span>
          <span>
            <img src={followers} alt="" />
            {user.followers} seguidores
          </span>
        </ProfileInfo>
      </ProfileContent>
    </ProfileContainer>
  )
}
