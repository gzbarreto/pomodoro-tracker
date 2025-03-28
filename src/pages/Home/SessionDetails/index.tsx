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
import { Button } from "../../../components/Button"

export function SessionDetails() {
  return (
    <SessionDetailsContainer>
      <SessionHeader>
        <SessionTitle>
          <h3>Dados da sessão</h3>
          <p>Acompanhe os próximos ciclos</p>
        </SessionTitle>
        <NavLink to={"configuration"}>
          <IconButton icon={<Gear size={24} />} />
        </NavLink>
      </SessionHeader>

      <SessionInfoContainer>
        <ModeInfo>
          <div>
            <h4>Modo atual</h4>
            <p>Ciclo atual do cronômetro</p>
          </div>
          <ModeBadge mode={'longBreak'}/>
        </ModeInfo>

        <ModeInfo>
          <div>
            <h4>Próximo modo</h4>
            <p>Ciclo que será ativado ao final do cronômetro</p>
          </div>
          <ModeBadge mode={'focus'}/>
        </ModeInfo>
      </SessionInfoContainer>

      <SessionCountdownContainer>
        <div>
          <h2>Vamos começar!</h2>
          <p>Bora para mais um ciclo</p>
          <Button label="Iniciar"/>
        </div>

        <span>00:00</span>
      </SessionCountdownContainer>
    </SessionDetailsContainer>
  )
}
