import { CountdownCircleTimer } from "react-countdown-circle-timer"
import { defaultTheme } from "../../../../styles/themes/default"
import { CountdownContainer } from "./styles"
import { Button } from "../../../../components/Button"
import { useContext, useState } from "react"
import { SessionContext } from "../../../../contexts/SessionContext"
import { ModeListContext } from "../../../../contexts/ModeListContext"
import { IconButton } from "../../../../components/IconButton"
import { Pause } from "@phosphor-icons/react"

export function Countdown() {
  const [key, setKey] = useState(0)

  const { startSession, isSessionActive, pauseSession } =
    useContext(SessionContext)

  const { currentMode, updateCurrentMode, isLastMode } =
    useContext(ModeListContext)

  function handleStart() {
    startSession()
  }

  function handleCompletedCycle() {
    updateCurrentMode()
    setKey((prevKey: number) => prevKey + 1)
  }

  function handleOnPause() {
    pauseSession()
  }
  //TODO: fix the isLastMode logic
  console.log("is last mode? ", isLastMode)

  return (
    <CountdownContainer>
      {!isSessionActive ? (
        <div>
          <h2>Vamos começar!</h2>
          <p>Bora para mais um ciclo</p>
          <Button onClick={handleStart} label="Iniciar" type="button" />
        </div>
      ) : (
        <div>
          <IconButton icon={<Pause />} onClick={handleOnPause} />
        </div>
      )}

      <CountdownCircleTimer
        key={key}
        isPlaying={isSessionActive}
        duration={currentMode.duration || 0}
        colors={`#${currentMode.color}`}
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
