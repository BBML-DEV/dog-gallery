interface InputProps {
  value: string
  name: string
  type: string
  label: string
  setValue: React.Dispatch<SetStateAction<string>>
}

export const Input = ({ label, value, name, type, setValue }: InputProps) => {
  const handleChange = ({ target }: { target: HTMLInputElement }) => {
    setValue(target.value)
  }

  return (
    <div className="mb-4">
      <label htmlFor={name}>{label}</label>
      <input
        className="p-2 bg-zinc-100 w-full rounded-md border-0 hover:inputBorder focus:inputBorder"
        value={value}
        id={name}
        type={type}
        onChange={handleChange}
      />
    </div>
  )
}
