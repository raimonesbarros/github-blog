import { FileX } from '@phosphor-icons/react'
import { EmptyBlogContainer } from './EmptyBlog.styles'

export function EmptyBlog() {
  return (
    <EmptyBlogContainer>
      <FileX size={64} />
      <p>
        <strong>Nenhuma publicação encontrada</strong>
        <small>
          Você pode clicar em buscar e depois Enter ou recarregar a página
        </small>
      </p>
    </EmptyBlogContainer>
  )
}
