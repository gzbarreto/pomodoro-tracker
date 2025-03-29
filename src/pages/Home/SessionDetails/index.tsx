import { Gear } from "@phosphor-icons/react"
import { IconButton } from "../../../components/IconButton"
import {
  SessionCountdownContainer,
  SessionDetailsContainer,
  SessionHeader,
  SessionInfoContainer,
  SessionTitle,
} from "./styles"
import { NavLink } from "react-router-dom"

export function SessionDetails() {
  return (
    <SessionDetailsContainer>
      <SessionHeader>
        <SessionTitle>
          <h2>Dados da sessão</h2>
          <p>Acompanhe os próximos ciclos</p>
        </SessionTitle>
        <NavLink to={"configuration"}>
          <IconButton icon={<Gear size={24} />} />
        </NavLink>
      </SessionHeader>

      <SessionInfoContainer>
        <div>
          <h4>Modo atual:</h4>
          <p>Ciclo atual do cronômetro</p>
        </div>

        <div>
          <h4>Próximo modo:</h4>
          <p>Ciclo que será ativado ao final do cronômetro</p>
        </div>
      </SessionInfoContainer>

      <SessionCountdownContainer>
        <p>Teste countdown</p>
      </SessionCountdownContainer>
    </SessionDetailsContainer>
  )
}
