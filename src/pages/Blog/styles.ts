import { styled } from 'styled-components'

export const BlogContainer = styled.div`
  width: 100%;
  max-width: 54rem;

  margin: 0 auto;
  padding: 0 0.5rem 2rem;

  display: flex;
  flex-direction: column;
`
export const BlogInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  p {
    font-size: 1.15rem;
    font-weight: 700;
    color: ${(props) => props.theme.subtitle};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme.span};
  }
`
export const FormContainer = styled.form`
  input {
    width: 100%;

    padding: 0.875rem 1rem;
    margin-top: 0.75rem;

    border: 1px solid ${(props) => props.theme.border};
    border-radius: 6px;

    color: ${(props) => props.theme.text};
    background: ${(props) => props.theme.input};

    &::placeholder {
      color: ${(props) => props.theme.label};
    }
  }

  button {
    display: none;
  }
`
export const PostContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 3rem;

  a {
    color: ${(props) => props.theme.text};
  }
`
