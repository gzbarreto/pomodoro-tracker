import { MessageContainer, ModeInfo, SessionInfoContainer } from "./styles"
import { ModeBadge } from "../../../components/ModeBadge"
import { Countdown } from "./Countdown"
import { SectionContainer, SessionHeader, SessionTitle } from "../styles"
import { useContext } from "react"
import { ModeListContext } from "../../../contexts/ModeListContext"
import { SessionContext } from "../../../contexts/SessionContext"
import { Button } from "../../../components/Button"

export function SessionDetails() {
  const { currentMode, nextMode } = useContext(ModeListContext)
  const { isSessionFinished, setIsSessionFinished } = useContext(SessionContext)

    function handleRestart() {
    // clean tasks
    setIsSessionFinished(false)
  }

  return (
    <SectionContainer>
      <SessionHeader>
        <SessionTitle>
          <h3>Dados da sessão</h3>
          <p>Acompanhe os próximos ciclos</p>
        </SessionTitle>
      </SessionHeader>

      {isSessionFinished ? (
        <MessageContainer>
          <h2>Parabéns! 🥳</h2>
          <p>
            Você chegou no fim de mais um ciclo. Marque as tarefas finalizadas e
            reinicie a sessão.
          </p>
          <Button onClick={handleRestart} label="Nova sessão" type="button" />
        </MessageContainer>
      ) : (
        <div>
          <SessionInfoContainer>
            <ModeInfo>
              <div>
                <h4>Modo atual</h4>
                <p>Ciclo atual do cronômetro</p>
              </div>

              <ModeBadge type={currentMode.type} />
            </ModeInfo>

            <ModeInfo>
              <div>
                <h4>Próximo modo</h4>
                <p>Ciclo que será ativado ao final do cronômetro</p>
              </div>

              <ModeBadge type={nextMode.type} />
            </ModeInfo>
          </SessionInfoContainer>
          <Countdown />
        </div>
      )}
    </SectionContainer>
  )
}
