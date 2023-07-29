import { Route, Routes } from 'react-router-dom'
import BannerDog from '../../../assets/login.jpg'
import { LoginForm } from './components/LoginForm'
import { LoginCreate } from './components/LoginCreate'
import { LoginLostPassword } from './components/LoginLostPassword'
import { LoginResetPassword } from './components/LoginResetPassword'

export const Login = () => {
  return (
    <section className="flex">
      <img src={BannerDog} alt="" className="w-3/6" />

      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="create" element={<LoginCreate />} />
        <Route path="lostPassword" element={<LoginLostPassword />} />
        <Route path="resetPassword" element={<LoginResetPassword />} />
      </Routes>
    </section>
  )
}
