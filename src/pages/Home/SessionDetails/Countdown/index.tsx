import { CountdownCircleTimer } from "react-countdown-circle-timer"
import { defaultTheme } from "../../../../styles/themes/default"
import { CountdownContainer } from "./styles"
import { Button } from "../../../../components/Button"
import { useContext, useState } from "react"
import { SessionContext } from "../../../../contexts/SessionContext"
import { ModeListContext } from "../../../../contexts/ModeListContext"
import { Pause } from "@phosphor-icons/react"

export function Countdown() {
  const [key, setKey] = useState(0)

  const {
    startSession,
    isSessionActive,
    pauseSession,
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

  // TODO: refactor code to use useEffect (study this lesson https://app.rocketseat.com.br/classroom/projeto-02/group/funcionalidades-da-aplicacao/lesson/o-hook-use-effect)
  // TODO: refactor code to use Reducers (study this lesson https://app.rocketseat.com.br/classroom/projeto-02/group/reducers/lesson/criando-reducer-de-ciclos)
  // TODO: add task list logic do aplication:
  // - use react hookForm (study this lesson https://app.rocketseat.com.br/classroom/projeto-02/group/formularios-1/lesson/controlled-vs-uncontrolled)
  // - add task to list and to session
  // - remove task from list
  // - mark task as done/undone
  // - clean list when startins new session

  return (
    <CountdownContainer>
      {!isSessionActive ? (
        <div>
          <h2>Vamos começar!</h2>
          <p>Bora para mais um ciclo</p>
          <Button onClick={handleStart} label="Iniciar ciclo" type="button" />
        </div>
      ) : (
        <div>
          <Button
            onClick={handleOnPause}
            type="button"
            icon={<Pause size={16} />}
          />
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
