import logo from '../../../assets/logo.svg'
import effect1 from '../../../assets/effect1.svg'
import effect2 from '../../../assets/effect2.svg'
import { Brand, HeaderContainer } from './Header.styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src={effect1} alt="" />
      <Brand src={logo} alt="" />
      <img src={effect2} alt="" />
    </HeaderContainer>
  )
}
