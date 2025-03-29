import { ButtonContainer } from "./styles";

interface ButtonProps {
  label: string
}
export function Button({label} : ButtonProps) {
  return (
    <ButtonContainer>
      {label}
    </ButtonContainer>
  )
}
