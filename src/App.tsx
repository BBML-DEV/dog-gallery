import { BrowserRouter } from 'react-router-dom'
import { Router } from './app/shared/router'

export const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
}
