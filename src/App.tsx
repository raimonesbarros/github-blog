import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/Global'
import { defaultTheme } from './styles/theme/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Hello, there!</h1>
      <GlobalStyle />
    </ThemeProvider>
  )
}
