import { Trash } from "@phosphor-icons/react"
import { Checkbox } from "../Checkbox"
import { LeadingContainer, ListItemContainer } from "./styles"
import { IconButton } from "../../../../components/IconButton"

interface listItemProps {
  isDone: boolean
  task: string
  onClick: () => void
  onDelete?: () => void
}

export function ListItem({ isDone, task, onClick, onDelete }: listItemProps) {
  return (
    <ListItemContainer isDone={isDone}>
      <LeadingContainer>
        <Checkbox isChecked={isDone} onClick={onClick} />
        <p>{task}</p>
      </LeadingContainer>
      <IconButton onClick={onDelete} icon={<Trash />} />
    </ListItemContainer>
  )
}
