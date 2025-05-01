import { Checkbox } from "../Checkbox";
import { ListItemContainer } from "./styles";

interface listItemProps {
  isDone: boolean
  task: string
  onClick: () => void
}

export function ListItem({ isDone, task, onClick }: listItemProps) {
  return (
    <ListItemContainer>
      <Checkbox isChecked={isDone} onClick={onClick} />
      <p>{task}</p>
    </ListItemContainer>
  )
}