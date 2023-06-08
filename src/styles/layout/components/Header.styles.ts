import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  background: ${(props) => props.theme.profile};
  overflow-y: hidden;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 18.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  margin: 0 auto;

  background: ${(props) => props.theme.profile};

  :first-child {
    width: 33%;
    height: 11.75rem;
    margin: 4.375rem 0 2.375rem;
  }
  :last-child {
    width: 33%;
    height: 14.75rem;
    margin: 2rem 0;
  }
`

export const Brand = styled.img`
  width: 9.3rem;
  margin-top: 4rem;
`
export const Elipse = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background: ${(props) => props.theme.blue};
  filter: blur(500px);
`
