import { useEffect, useState } from 'react'
import { BlogPosts } from './components/BlogPosts'
import { Profile } from './components/Profile'
import { BlogContainer, BlogInfo, PostContainer } from './styles'
import { api } from '../../fetch/axios'
import { userCurrent, repoCurrent } from '../../owner'

export interface UserType {
  name: string
  avatar_url: string
  bio: string
  login: string
  company: string
  followers: number
  url: string
}

export interface IssueType {
  number?: number
  title: string
  created_at?: string
  body: string
}

interface IssueInfoType {
  total_count: number
  items: IssueType[]
}

export function Blog() {
  const [user, setUser] = useState<UserType>(Object)
  const [issues, setIssues] = useState<IssueInfoType>(Object)

  async function fetchUser() {
    const response = await api.get(`/users/${userCurrent}`)

    setUser(response.data)
  }

  async function fetchIssues(query: string = '') {
    const response = await api.get(`/search/issues`, {
      params: {
        q: `repo:${userCurrent}/${repoCurrent} ${query}`,
        _sort: 'created_at',
        _order: 'desc',
      },
    })

    setIssues(response.data)
  }

  useEffect(() => {
    fetchUser()
    fetchIssues()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <BlogContainer>
      <Profile user={user} />
      <BlogInfo>
        <p>Publicações</p>
        <span>
          {issues.total_count &&
            (issues.total_count <= 1
              ? issues.total_count + ' publicação'
              : issues.total_count + ' publicações')}
        </span>
      </BlogInfo>
      <input type="text" id="search" placeholder="Buscar conteúdo" />
      <PostContainer>
        {issues.items &&
          issues.items.map((issue) => (
            <BlogPosts
              key={issue.number}
              title={issue.title}
              createdAt={issue.created_at}
              body={issue.body}
            />
          ))}
      </PostContainer>
    </BlogContainer>
  )
}
