import { Link } from 'react-router-dom'
import Dogs from '../../../../assets/dogs.svg'
import User from '../../../../assets/usuario.svg'

export const Header = () => {
  return (
    <header className="shadow fixed w-full z-50 bg-white top-0">
      <nav className="container w-[50rem] h-16 flex justify-between items-center">
        <Link to={'/'} aria-label="Dogs - Home" className="py-2">
          <img src={Dogs} />
        </Link>
        <Link to={'/login'} className="flex flex-row items-center gap-x-2">
          Login / Criar
          <img src={User} className="w-3.5 h-4" />
        </Link>
      </nav>
    </header>
  )
}
