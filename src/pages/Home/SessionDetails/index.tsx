import { ModeInfo, SessionInfoContainer } from "./styles"
import { ModeBadge } from "../../../components/ModeBadge"
import { Countdown } from "./Countdown"
import { SectionContainer, SessionHeader, SessionTitle } from "../styles"

export function SessionDetails() {
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
          <ModeBadge mode={"longBreak"} />
        </ModeInfo>

        <ModeInfo>
          <div>
            <h4>Próximo modo</h4>
            <p>Ciclo que será ativado ao final do cronômetro</p>
          </div>
          <ModeBadge mode={"focus"} />
        </ModeInfo>
      </SessionInfoContainer>

      <Countdown />
    </SectionContainer>
  )
}
