import { Checkbox } from "../../../components/Checkbox"
import { SectionContainer, SessionHeader, SessionTitle } from "../styles"
import { List } from "./styles"

export function TodoList() {
  return (
    <SectionContainer>
      <SessionHeader>
        <SessionTitle>
          <h3>Lista de tarefas</h3>
          <p>Seus objetivos para essa sessão</p>
        </SessionTitle>
      </SessionHeader>

      <List>
        <li>
          <Checkbox isChecked={false} onClick={() => {}} />
          Item 1
        </li>
        <li>
          <Checkbox isChecked={true} onClick={() => {}} />
          Item 2
        </li>
      </List>
    </SectionContainer>
  )
}
