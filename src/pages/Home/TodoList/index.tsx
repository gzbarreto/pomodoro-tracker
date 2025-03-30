import { Button } from "../../../components/Button"
import { SectionContainer, SessionHeader, SessionTitle } from "../styles"
import { ListItem } from "./ListItem"
import { FormContainer, ListContainer, TaskInput } from "./styles"

export function TodoList() {
  return (
    <SectionContainer>
      <SessionHeader>
        <SessionTitle>
          <h3>Lista de tarefas</h3>
          <p>Seus objetivos para essa sessão</p>
        </SessionTitle>
      </SessionHeader>

      <ListContainer>
        <ul>
          <ListItem isDone={true} task={"Estudar React"} onClick={() => {}} />
          <ListItem isDone={false} task={"Estudar Mobile"} onClick={() => {}} />
        </ul>

        <FormContainer>
          <TaskInput placeholder="Nova tarefa" />
          <Button label="Adicionar" type="submit" />
        </FormContainer>
      </ListContainer>
    </SectionContainer>
  )
}
