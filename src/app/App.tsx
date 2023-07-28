import { BrowserRouter } from 'react-router-dom'
import { Router } from './shared/router'

export const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}
