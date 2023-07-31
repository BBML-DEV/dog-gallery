interface InputProps {
  value: string
  name: string
  type: string
  setValue: React.Dispatch<SetStateAction<string>>
}

export const Input = ({ value, name, type, setValue }: InputProps) => {
  const handleChange = ({ target }: { target: HTMLInputElement }) => {
    setValue(target.value)
  }

  return (
    <input
      placeholder="teste"
      className="p-2 bg-zinc-100 w-full rounded-md border-0 hover:ring hover:ring-amber-200 hover:bg-white focus:outline-none focus:ring focus:ring-amber-200 focus:bg-white"
      value={value}
      name={name}
      type={type}
      onChange={handleChange}
    />
  )
}
