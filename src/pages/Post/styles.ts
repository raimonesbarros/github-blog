import { styled } from 'styled-components'

export const PostContainer = styled.section`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
  padding: 0 0.5rem;

  transform: translateY(-5.5rem);
`
export const PostContent = styled.article`
  width: 100%;
  padding: 2.5rem 2rem;
  font-size: 1.15rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  img {
    width: 100%;
    height: 300px;
    border-radius: 8px;
  }

  a {
    color: ${(props) => props.theme.blue};
    text-decoration: underline;

    &::after {
      content: ' 🔗';
    }
  }
`
