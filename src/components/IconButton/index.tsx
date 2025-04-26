import { JSX } from "react"
import { IconButtonContainer } from "./styles"

interface IconButtonProps {
  icon: JSX.Element
  label?: string
  onClick?: () => void
}
export function IconButton({ icon, label, onClick }: IconButtonProps ) {
  return (
    <IconButtonContainer>
      <button onClick={onClick}>{icon}{label}</button>
    </IconButtonContainer>
  )
}
