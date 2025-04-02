import { ButtonContainer } from "./styles"

interface ButtonProps {
  label: string
  type: "button" | "submit" 
  onClick?: () => void
}

export function Button({ label, type, onClick }: ButtonProps) {
  return <ButtonContainer onClick={onClick} type={type}>{label}</ButtonContainer>
}
