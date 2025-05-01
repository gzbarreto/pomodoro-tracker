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
import { useForm } from "react-hook-form"

export function TodoList() {
  const { currentSession, addTask, currentSessionId, clickTask } = useContext(SessionContext)
  const { register, handleSubmit } = useForm()

  function handleAddTask(data: any) {
    const newTask = {
      id: String(new Date().getTime()),
      task: data.content,
      isDone: false,
    }

    addTask(newTask, currentSessionId)
    // Reset the input field after adding the task
    document.querySelector("input")!.value = ""
  }

  function handleTaskDone(taskId: string) {
    clickTask(taskId, currentSessionId)
  }

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
                onClick={() => handleTaskDone(task.id)}
              />
            ))}
          </ul>
        )}

        <FormContainer>
          <TaskInput placeholder="Nova tarefa" {...register("content")} />
          <Button
            label="Adicionar"
            type="submit"
            onClick={handleSubmit(handleAddTask)}
          />
        </FormContainer>
      </ListContainer>
    </SectionContainer>
  )
}
