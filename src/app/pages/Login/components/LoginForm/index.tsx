import { Link } from 'react-router-dom'

export const LoginForm = () => {
  return (
    <section>
      Login Form
      <Link to={'/login/create'}> Cadastro</Link>
    </section>
  )
}
