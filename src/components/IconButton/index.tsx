import { JSX } from "react"
import { IconButtonContainer } from "./styles"

interface IconButtonProps {
  icon: JSX.Element,
  label?: string
}
export function IconButton({ icon, label }: IconButtonProps ) {
  return (
    <IconButtonContainer>
      <button>{icon}{label}</button>
    </IconButtonContainer>
  )
}
