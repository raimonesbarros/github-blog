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

export function Profile() {
  return (
    <ProfileContainer>
      <img src="./src/assets/logo.svg" alt="" />
      <ProfileContent>
        <ProfileName>
          <h2>Cameron Willianson</h2>
          <a href="#">
            GITHUB
            <img src={link} alt="" />
          </a>
        </ProfileName>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque sit
          temporibus, non, explicabo eligendi reiciendis aliquid ab nemo saepe
          iusto optio quos!
        </p>
        <ProfileInfo>
          <span>
            <img src={github} alt="" />
            cameronwlt
          </span>
          <span>
            <img src={company} alt="" />
            Rocketseat
          </span>
          <span>
            <img src={followers} alt="" />
            32 seguidores
          </span>
        </ProfileInfo>
      </ProfileContent>
    </ProfileContainer>
  )
}
