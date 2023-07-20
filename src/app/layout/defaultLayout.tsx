import { Outlet } from 'react-router-dom'
import { Header } from '../shared/components/Header'

export const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
