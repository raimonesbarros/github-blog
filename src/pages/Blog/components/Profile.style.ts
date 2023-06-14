import { styled } from 'styled-components'

export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 54rem;

  padding: 2rem;
  margin: 0 auto;
  display: flex;
  gap: 2rem;

  transform: translate(0, -5.5rem);

  background: ${(props) => props.theme.profile};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
    flex-shrink: 0;
  }

  @media screen and (width <= 590px) {
    flex-direction: column;
    align-items: center;

    p {
      text-align: center;
    }
  }
`
export const ProfileContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    width: 100%;
    height: 100%;
  }

  @media screen and (width <= 590px) {
    align-items: center;
  }
`
export const ProfileName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1.5rem;

  margin: 0.5rem 0;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-size: 0.75rem;
    font-size: 700;

    color: ${(props) => props.theme.blue};

    img {
      width: 1rem;
      height: 1rem;
    }
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1.3;
    color: ${(props) => props.theme.title};
  }

  @media screen and (width <= 590px) {
    flex-direction: column;
    align-items: center;
  }
`
export const ProfileInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;

  margin-top: 0.5rem;

  color: ${(props) => props.theme.subtitle};

  span {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    gap: 0.5rem;

    img {
      width: 1.15rem;
      height: 1.15rem;
    }
  }
`
