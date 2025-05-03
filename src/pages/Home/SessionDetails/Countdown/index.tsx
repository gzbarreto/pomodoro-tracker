import { CountdownCircleTimer } from "react-countdown-circle-timer"
import { defaultTheme } from "../../../../styles/themes/default"
import { CountdownContainer } from "./styles"
import { Button } from "../../../../components/Button"
import { useContext, useState } from "react"
import { SessionContext } from "../../../../contexts/SessionContext"
import { ModeListContext } from "../../../../contexts/ModeListContext"
import { Pause, Play } from "@phosphor-icons/react"

export function Countdown() {
  const [key, setKey] = useState(0)

  const {
    startSession,
    isSessionActive,
    isSessionPaused,
    pauseSession,
    resumeSession,
    finishSession,
  } = useContext(SessionContext)

  const { currentMode, updateCurrentMode, isLastMode } =
    useContext(ModeListContext)

  function handleStart() {
    startSession()
  }

  function handleCompletedCycle() {
    if (isLastMode) {
      finishSession()
    }
    updateCurrentMode()
    setKey((prevKey: number) => prevKey + 1)
  }

  function handleOnPause() {
    pauseSession()
  }

  function handleOnResume() {
    resumeSession()
  }

  // TODO: add task list logic do aplication:
  // - create initial session so it can add tasks before starting the session

  return (
    <CountdownContainer>
      {isSessionActive ? (
        isSessionPaused ? (
          <div>
            <Button
              onClick={handleOnResume}
              type="button"
              icon={<Play size={16} />}
            />
          </div>
        ) : (
          <div>
            <Button
              onClick={handleOnPause}
              type="button"
              icon={<Pause size={16} />}
            />
          </div>
        )
      ) : (
        <div>
          <h2>Vamos começar!</h2>
          <p>Bora para mais um ciclo</p>
          <Button onClick={handleStart} label="Iniciar ciclo" type="button" />
        </div>
      )}

      <CountdownCircleTimer
        key={key}
        isPlaying={isSessionActive && !isSessionPaused}
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
