import logo from '../../../assets/logo.svg'
import effect1 from '../../../assets/effect1.svg'
import effect2 from '../../../assets/effect2.svg'
import elipse from '../../../assets/elipse.svg'
import { Brand, Elipse, HeaderContainer, HeaderContent } from './Header.styles'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={effect1} alt="" />
        <Elipse src={elipse} alt="" />
        <Brand src={logo} alt="" />
        <img src={effect2} alt="" />
      </HeaderContent>
    </HeaderContainer>
  )
}
