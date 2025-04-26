import { ButtonContainer } from "./styles"

interface ButtonProps {
  label?: string
  type: "button" | "submit" 
  icon?: React.ReactNode
  onClick?: () => void
}

export function Button({ label, type, icon, onClick }: ButtonProps) {
  return <ButtonContainer onClick={onClick} type={type}>{icon}{label}</ButtonContainer>
}
