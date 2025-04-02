import { CountdownCircleTimer } from "react-countdown-circle-timer"
import { defaultTheme } from "../../../../styles/themes/default"
import { CountdownContainer } from "./styles"
import { Button } from "../../../../components/Button"

// interface mode {
//   type: "focus" | "shortBreak" | "longBreak"
//   duration: number
//   color: string
// }

export function Countdown() {


  function handleStart() {

  }
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
        <Button onClick={handleStart} label="Iniciar" type="button" />
      </div>
      <CountdownCircleTimer
        isPlaying={false}
        duration={30}
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
