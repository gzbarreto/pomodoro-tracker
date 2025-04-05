import { CountdownCircleTimer } from "react-countdown-circle-timer"
import { defaultTheme } from "../../../../styles/themes/default"
import { CountdownContainer } from "./styles"
import { Button } from "../../../../components/Button"
import { useContext, useState } from "react"
import { SessionContext } from "../../../../contexts/SessionContext"

export function Countdown() {
  const [key, setKey] = useState(0)

  const {
    startSession,
    isSessionActive,
    currentSession,
    sessionCurrentMode,
    completeCycle,
  } = useContext(SessionContext)

  function handleStart() {
    startSession()
  }

  function handleCompletedCycle() {
    completeCycle()
    setKey((prevKey: number) => prevKey + 1)
  }

  return (
    <CountdownContainer>
      <div>
        <h2>Vamos começar!</h2>
        <p>Bora para mais um ciclo</p>
        <Button onClick={handleStart} label="Iniciar" type="button" />
      </div>
      <CountdownCircleTimer
        key={key}
        isPlaying={isSessionActive}
        duration={currentSession?.modeList[sessionCurrentMode].duration || 0}
        colors={`#${currentSession?.modeList[sessionCurrentMode].color}`}
        trailColor={`#${defaultTheme["gray-800"].replace("#", "")}`}
        onComplete={handleCompletedCycle}
      >
        {({ remainingTime }) => {
          const minutes = Math.floor(remainingTime / 60)
          const seconds = remainingTime % 60

          return (
            <span>
              <span>
                {String(minutes).padStart(2, "0")}:
                {String(seconds).padStart(2, "0")}
              </span>
            </span>
          )
        }}
      </CountdownCircleTimer>
    </CountdownContainer>
  )
}
