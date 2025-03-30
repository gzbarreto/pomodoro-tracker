import { Check } from "@phosphor-icons/react"
import { CheckboxChecked, CheckboxContainer } from "./styles"

interface checkboxProps {
  isChecked: boolean
  onClick: () => void
}

export function Checkbox({ isChecked, onClick }: checkboxProps) {
  return (
    <CheckboxContainer onClick={onClick}>
      {isChecked ? (<CheckboxChecked> <Check weight={"bold"} size={16}/> </CheckboxChecked>) : null}
    </CheckboxContainer>
  )
}
