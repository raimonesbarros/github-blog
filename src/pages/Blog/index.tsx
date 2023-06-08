import { BlogPosts } from './components/BlogPosts'
import { Profile } from './components/Profile'
import { BlogContainer, BlogInfo, PostContainer } from './styles'

export function Blog() {
  return (
    <BlogContainer>
      <Profile />
      <BlogInfo>
        <p>Publicações</p>
        <span>6 publicações</span>
      </BlogInfo>
      <input type="text" id="search" placeholder="Buscar conteúdo" />
      <PostContainer>
        <BlogPosts />
        <BlogPosts />
        <BlogPosts />
        <BlogPosts />
        <BlogPosts />
        <BlogPosts />
      </PostContainer>
    </BlogContainer>
  )
}
