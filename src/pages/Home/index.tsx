import { SessionDetails } from "./SessionDetails";
import { HomeContainer } from "./styles";
import { TodoList } from "./TodoList";

export function Home() {
  return (
    <HomeContainer>
      <SessionDetails />
      <TodoList />
    </HomeContainer>
  )
}
