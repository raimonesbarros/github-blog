import { Route, Routes } from 'react-router-dom'
import { Blog } from './pages/Blog'
import { Post } from './pages/Post'
import { DefaultLayout } from './styles/layout/Default'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />} />
        <Route path="/post" element={<Post />} />
      </Route>
    </Routes>
  )
}
