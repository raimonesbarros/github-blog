import { styled } from 'styled-components'

export const BlogPostsContainer = styled.div`
  width: 100%;
  max-width: 368px;
  max-height: 260px;
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 10px;
  background: ${(props) => props.theme.post};

  > div {
    display: flex;
    justify-content: space-between;
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

  > span {
    height: 65%;
    margin-top: 1.25rem;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`
