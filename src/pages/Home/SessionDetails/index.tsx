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
import { CountdownCircleTimer } from "react-countdown-circle-timer"
import { NavLink } from "react-router-dom"
import { ModeBadge } from "../../../components/ModeBadge"
import { Button } from "../../../components/Button"
import { defaultTheme } from "../../../styles/themes/default"
import { useEffect } from "react"

export function SessionDetails() {

  //define a cor do timer de acordo com o modo
  const timerColors = {
    focusColor: defaultTheme["primary-500"].replace("#", ""),
    shortBreakColor: defaultTheme["secondary-500"].replace("#", ""),
    longBreakColor: defaultTheme["accent-500"].replace("#", ""),
  }

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

      <SessionCountdownContainer>
        <div>
          <h2>Vamos começar!</h2>
          <p>Bora para mais um ciclo</p>
          <Button label="Iniciar" />
        </div>

        <CountdownCircleTimer
          isPlaying={false}
          duration={500}
          colors={`#${timerColors.focusColor}`}
          trailColor={`#${defaultTheme["gray-800"].replace("#", "")}`}
        >
          {({ remainingTime }) => {
            const minutes = Math.floor(remainingTime / 60)
            const seconds = remainingTime % 60

            return (
              <span>
                {minutes}:{seconds}
              </span>
            )
          }}
        </CountdownCircleTimer>
      </SessionCountdownContainer>
    </SessionDetailsContainer>
  )
}
