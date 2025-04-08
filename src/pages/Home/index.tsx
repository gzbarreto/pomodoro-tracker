import { ModeListContextProvider } from "../../contexts/ModeListContext";
import { SessionDetails } from "./SessionDetails";
import { HomeContainer } from "./styles";
import { TodoList } from "./TodoList";

export function Home() {
  return (
    <HomeContainer>
      <ModeListContextProvider>
        <SessionDetails />
      </ModeListContextProvider>
      <TodoList />
    </HomeContainer>
  )
}
