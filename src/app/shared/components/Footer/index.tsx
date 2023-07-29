import Dogs from '../../../../assets/dogs.svg'

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center pt-12 px-4 bg-amber-400 end-0 h-40">
      <img src={Dogs} alt="Dogs - Home" className="w-8 h-8 " />
      <p className="mt-4 text-amber-900">Dogs. Alguns direitos reservados.</p>
    </footer>
  )
}
