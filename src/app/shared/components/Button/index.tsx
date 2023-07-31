interface ButtonProps {
  text: string
}
export const Button = ({ text }: ButtonProps) => {
  return (
    <button type="submit" className="btn min-w-32 hover:boxShadowButton">
      {text}
    </button>
  )
}
