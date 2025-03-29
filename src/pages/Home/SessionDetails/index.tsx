import { Gear } from "@phosphor-icons/react"
import { IconButton } from "../../../components/IconButton"
import {
  ModeInfo,
  SessionCountdownContainer,
  SessionDetailsContainer,
  SessionHeader,
  SessionInfoContainer,
  SessionTitle,
} from "./styles"
import { NavLink } from "react-router-dom"
import { ModeBadge } from "../../../components/ModeBadge"

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
        <ModeInfo>
          <div>
            <h4>Modo atual:</h4>
            <p>Ciclo atual do cronômetro</p>
          </div>
          <ModeBadge mode={'longBreak'}/>
        </ModeInfo>

        <ModeInfo>
          <div>
            <h4>Próximo modo:</h4>
            <p>Ciclo que será ativado ao final do cronômetro</p>
          </div>
          <ModeBadge mode={'focus'}/>
        </ModeInfo>
      </SessionInfoContainer>

      <SessionCountdownContainer>
        <p>Teste countdown</p>
      </SessionCountdownContainer>
    </SessionDetailsContainer>
  )
}
