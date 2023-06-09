import { styled } from 'styled-components'

export const PostHeaderContainer = styled.div`
  background: ${(props) => props.theme.profile};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  padding: 2rem;

  h1 {
    font-size: 1.5rem;
    font-weight: 700;

    line-height: 1.3;
    margin-top: 1.25rem;

    color: ${(props) => props.theme.title};
  }
`
export const PostHeaderLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme.blue};
  }
`
export const PostHeaderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0.5rem;
    img {
      width: 1.15rem;
      height: 1.15rem;
      flex-shrink: 0;
    }

    span {
      flex-grow: 0;
      color: ${(props) => props.theme.span};
    }
  }
`
