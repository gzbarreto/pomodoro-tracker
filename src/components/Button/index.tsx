import { ButtonContainer } from "./styles"

interface ButtonProps {
  label: string
  type: "button" | "submit"
}

export function Button({ label, type }: ButtonProps) {
  return <ButtonContainer type={type}>{label}</ButtonContainer>
}
