import { styled } from 'styled-components'

export const BlogPostsContainer = styled.div`
  width: 100%;
  max-width: 416px;
  padding: 2rem;
  border-radius: 10px;
  background: ${(props) => props.theme.post};

  > div {
    display: flex;
    align-items: flex-start;
    gap: 1rem;

    h1 {
      font-size: 1.25rem;
      font-weight: 700;
      color: ${(props) => props.theme.title};
    }

    span {
      flex-shrink: 0;
      font-size: 0.875rem;
      color: ${(props) => props.theme.span};
    }
  }

  p {
    margin-top: 1.25rem;
  }
`
