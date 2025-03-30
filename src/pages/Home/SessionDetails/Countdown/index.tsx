import { CountdownCircleTimer } from "react-countdown-circle-timer"
import { defaultTheme } from "../../../../styles/themes/default"
import { CountdownContainer } from "./styles"
import { Button } from "../../../../components/Button"

export function Countdown() {
  //define a cor do timer de acordo com o modo
  const timerColors = {
    focusColor: defaultTheme["primary-500"].replace("#", ""),
    shortBreakColor: defaultTheme["secondary-500"].replace("#", ""),
    longBreakColor: defaultTheme["accent-500"].replace("#", ""),
  }

  return (
    <CountdownContainer>
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
    </CountdownContainer>
  )
}
