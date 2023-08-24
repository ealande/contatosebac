import { Provider } from 'react-redux'
import Home from './pages/Home'
import GlobalStyle, { Container } from './styles'
import store from './store'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cadastro from './pages/Cadastro'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Cadastro />
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <RouterProvider router={rotas}></RouterProvider>
      </Container>
    </Provider>
  )
}

export default App
