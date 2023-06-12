import { styled } from 'styled-components'

export const PostContainer = styled.section`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;

  transform: translateY(-5.5rem);
`
export const PostContent = styled.article`
  padding: 2.5rem 2rem;

  a {
    color: ${(props) => props.theme.blue};
    text-decoration: underline;

    &::after {
      content: ' 🔗';
    }
  }
`
