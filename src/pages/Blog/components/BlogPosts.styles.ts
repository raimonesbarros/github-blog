import { styled } from 'styled-components'

export const BlogPostsContainer = styled.div`
  width: 100%;
  max-width: calc(368px - 2rem);
  height: 260px;
  padding: 2rem;
  border-radius: 10px;
  overflow: hidden;
  background: ${(props) => props.theme.post};

  img {
    width: 100%;
    height: 130px;
    border-radius: 4px;
  }

  > div {
    position: relative;
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
      position: absolute;
      right: 0;
      transform: translateY(-100%);
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
