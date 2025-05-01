import { useContext } from "react"
import { Button } from "../../../components/Button"
import { SectionContainer, SessionHeader, SessionTitle } from "../styles"
import { ListItem } from "./ListItem"
import {
  EmptyListState,
  FormContainer,
  ListContainer,
  TaskInput,
} from "./styles"
import { SessionContext } from "../../../contexts/SessionContext"
import { Clipboard } from "@phosphor-icons/react"

export function TodoList() {
  const { currentSession } = useContext(SessionContext)

  return (
    <SectionContainer>
      <SessionHeader>
        <SessionTitle>
          <h3>Lista de tarefas</h3>
          <p>Seus objetivos para essa sessão</p>
        </SessionTitle>
      </SessionHeader>

      <ListContainer>
        {!currentSession || currentSession?.tasks.length === 0 ? (
          <EmptyListState>
            <Clipboard size={32} />
            <p>Você ainda não adicionou nenhuma tarefa para essa sessão.</p>
          </EmptyListState>
        ) : (
          <ul>
            {currentSession?.tasks.map((task) => (
              <ListItem
                key={task.id}
                isDone={task.isDone}
                task={task.task}
                onClick={() => {}}
              />
            ))}
          </ul>
        )}

        <FormContainer>
          <TaskInput placeholder="Nova tarefa" />
          <Button label="Adicionar" type="submit" />
        </FormContainer>
      </ListContainer>
    </SectionContainer>
  )
}
