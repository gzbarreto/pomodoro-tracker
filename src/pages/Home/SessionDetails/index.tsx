import { ModeInfo, SessionInfoContainer } from "./styles"
import { ModeBadge } from "../../../components/ModeBadge"
import { Countdown } from "./Countdown"
import { SectionContainer, SessionHeader, SessionTitle } from "../styles"
import { useContext } from "react"
import { SessionContext } from "../../../contexts/SessionContext"

export function SessionDetails() {
const {sessionCurrentMode, session} = useContext(SessionContext)

  return (
    <SectionContainer>
      <SessionHeader>
        <SessionTitle>
          <h3>Dados da sessão</h3>
          <p>Acompanhe os próximos ciclos</p>
        </SessionTitle>
      </SessionHeader>

      <SessionInfoContainer>
        <ModeInfo>
          <div>
            <h4>Modo atual</h4>
            <p>Ciclo atual do cronômetro</p>
          </div>
          <ModeBadge mode={sessionCurrentMode.type} />
        </ModeInfo>

        <ModeInfo>
          <div>
            <h4>Próximo modo</h4>
            <p>Ciclo que será ativado ao final do cronômetro</p>
          </div>
          <ModeBadge mode={sessionNextMode.type} />
        </ModeInfo>
      </SessionInfoContainer>

      <Countdown />
    </SectionContainer>
  )
}
