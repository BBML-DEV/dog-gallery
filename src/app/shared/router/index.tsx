import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '../../layout/defaultLayout'
import { Home } from '../../pages/Home'
import { Login } from '../../pages/Login'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login/*" element={<Login />} />
      </Route>
    </Routes>
  )
}
